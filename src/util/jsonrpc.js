/**
 * author wangxiaoqing
 * rpc接口使用方法 async/await方式
 *
 *
 * import api from '../util/jsonrpc'
 * const api_url = 'http://passport.homestead.com/accounts.php'
 * const api = async () => {
 * 	  try{
 * 	  	/**
 * 	  	 *  method(required, string): 接口名称
 * 	  	 *	pargms(obejct):  接口参数,非必需
 * 	  	 *	api_url(required, string): 接口连接
 * 	  	 *
 * 	  	 /
 *    	const response = await api.call('method', pargms, api_url)
 *    	console.log('返回值'+ response)
 * 	  }catch(e){
 * 	  	console.log('请求异常，400等')
 *    	throw e
 * 	  }
 * }
 *
 * 开发模式，会通过node中间件来连接。
 *
 */
let middle_url = null
const localtion = __NODESERVER__
const host = location.host
if(localtion){
    middle_url = `http://${host}/rpcmiddle`
}

const api = {
    server(url) {
        if(!url){
            console.log('接口地址不能为空')
            return null
        }
        if(!(url in this)){
            this[url] = new JsonRpc(url)
        }
        return this[url]
    },
    call: (method, payload, server_url) => new Promise((resove, reject) => {
        if(!server_url){
            server_url = payload
            payload = {}
        }
        if(!payload) return console.log('payload不能为空');
        if(localtion){
            payload.post_url = server_url
            server_url = middle_url
        }
        const server = api.server(server_url)
        server.call(method, payload, {
            success(result){ resove(result) },
            failure(result){ reject(result) }
        })
    })
}

export default api

function JsonRpc(url) {
	this._url = url;
	this.loading = new Observable();
	this.loaded = new Observable();
	this.unhandledFailure = new Observable();
	this._loadingState = new CallStack(this.loading.trigger, this.loading, this.loaded.trigger, this.loaded);
	this._requests = [];
	this._batchingMilliseconds = 10;
	this._delayedTask = new DelayedTask();
};

JsonRpc.prototype = {
	setBatchingMilliseconds: function (value) {
		this._batchingMilliseconds = value;
	},

	call: function () {
		var args = this._getParams.apply(this, arguments);

		this._loadingState.enter();
		this._requests.push(args);

		if (this._batchingMilliseconds) {
			this._delayedTask.delay(this._batchingMilliseconds, this._sendRequests, this);
		} else {
			this._sendRequests();
		}
	},

	_sendRequests: function () {
		var me = this,
			requests = this._requests,
			data = [],
			i;

		this._requests = [];

		for (i = 0; i < requests.length; i += 1) {
			requests[i].request.id = i + 1;
			data.push(requests[i].request);
		}

		if (data.length === 1) {
			data = data[0];
		}

		me._doJsonPost(me._url, data, function (htmlSuccess, htmlResponse) {
			var responses;
			if (htmlSuccess) {
				responses = (me._isArray(htmlResponse) ? htmlResponse : [htmlResponse]);
			} else {
				responses = [];
				for (i = 0; i < requests.length; i += 1) {
					responses[i] = { id: i, error: { message: htmlResponse } };
				}
			}
			me._handleResponses(requests, responses);
		});
	},

	_handleResponses: function (requests, responses) {
		var i, response, request;
		for (i = 0; i < responses.length; i += 1) {
			response = responses[i];
			request = requests[response.id - 1];
			this._handleResponse(request, response);
		}
	},

	_handleResponse: function (request, response) {
		var success = !response.error,
			ret = (success ? response.result : response.error);

		this._loadingState.exit();

		if (success) {
			request.success.call(request.scope, ret);
		} else {
			request.failure.call(request.scope, ret);
		}
		request.callback.call(request.scope, success, ret);
	},

	_getParams: function () {

		var me = this,
			args = Array.prototype.slice.call(arguments),
			ret = {
				request: {
					jsonrpc: '2.0',
					method: args.shift()
				}
			};

		ret.request.params = [];
        if(this._isEmpty(args[0])){
            args.shift()
        }
		while (args.length > 1 && !this._isFunction(args[0])) {
			ret.request.params.push(args.shift());
		}

		if (this._isFunction(args[0])) {
			ret.success = args[0];
			ret.scope = args[1];
		} else {
			ret.success = args[0].success;
			ret.failure = args[0].failure;
			ret.callback = args[0].callback;
			ret.scope = args[0].scope;
		}
		ret.success = ret.success || function () { return; };
		ret.failure = ret.failure || function () { me.unhandledFailure.trigger.apply(me.unhandledFailure, arguments); };
		ret.callback = ret.callback || function () { return; };

		return ret;
	},
	_isArray: function (v) {
		return Object.prototype.toString.apply(v) === '[object Array]';
	},

	_isFunction: function (v) {
		return Object.prototype.toString.apply(v) === '[object Function]';
	},
	_isEmpty: function(v){
		for ( var p in v ) {
			if ( v.hasOwnProperty( p ) ) { return false; }
		}
		return true;
	},
	_doJsonPost: function (url, data, callback) {
		var xhr = new XMLHttpRequest();
		xhr.open("POST", url, true);
        if(localtion){
            xhr.setRequestHeader('Content-Type', 'application/json');
        }else{
            xhr.setRequestHeader('Content-Type', 'text/plain');
            xhr.withCredentials = true;
        }
		xhr.onreadystatechange = function () {
			if (xhr.readyState !== 4) {
				return;
			}

			var contentType = xhr.getResponseHeader('Content-Type');
			if (xhr.status !== 200) {
				callback(false, 'Expected HTTP response "200 OK", found "' + xhr.status + ' ' + xhr.statusText + '"');
			} else if (contentType.indexOf('application/json') !== 0) {
                callback(false, 'Expected JSON encoded response, found "' + contentType + '"');
			} else {
				var result = eval('(' + this.responseText + ')');
				callback(true, result);
			}
		};
		xhr.send(JSON.stringify(data));
	}
};

const CallStack = function (enterFn, enterScope, exitFn, exitScope) {
	this._counter = 0;
	this._enterFn = enterFn;
	this._exitFn = exitFn;
	this._enterScope = enterScope;
	this._exitScope = exitScope;
};

CallStack.prototype = {
	enter: function () {
		this._counter = (this._counter < 0 ? 1 : this._counter + 1);
		if (this._counter === 1) {
			this._enterFn.apply(this._enterScope, arguments);
		}
	},

	exit: function (fn) {
		this._counter -= 1;
		if (this._counter === 0) {
			this._exitFn.apply(this._exitScope, arguments);
		}
	}
};


const DelayedTask = function (fn, scope, args) {
	this._fn = fn || function () {};
	this._scope = scope || undefined;
	this._args = args || [];
	this._id = null;
};

DelayedTask.prototype = {
	delay: function (delay, fn, scope, args) {
		var me = this;

		this._fn = fn || this._fn;
		this._scope = scope || this._scope;
		this._args = args || this._args;
		this.cancel();
		this._id = window.setInterval(function () {
			window.clearInterval(me._id);
			me._id = null;
			me._fn.apply(me._scope, me._args);
		}, delay);
	},

	cancel: function () {
		if (this._id) {
			window.clearInterval(this._id);
			this._id = null;
		}
	}
};

const Observable = function () {
	this._listeners = [];
};

Observable.prototype = {
	bind: function (fn, scope) {

		var token = { fn: fn, scope: scope || this };
		this._listeners.push(token);
		return token;
	},

	unbind: function (token) {
		var idx = this._listeners.indexOf(token);
		if (idx !== -1) {
			this._listeners.splice(idx, 1);
		}
	},

	trigger: function () {
		var i;
		for (i = 0; i < this._listeners.length; i += 1) {
			this._listeners[i].fn.apply(this._listeners[i].scope, arguments);
		}
	}
};
