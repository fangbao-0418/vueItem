


//
// 'Block' Tiny Encryption Algorithm xxtea
//
// Algorithm: David Wheeler & Roger Needham, Cambridge University Computer Lab
//            http://www.cl.cam.ac.uk/ftp/papers/djw-rmn/djw-rmn-tea.html (1994)
//            http://www.cl.cam.ac.uk/ftp/users/djw3/xtea.ps (1997)
//            http://www.cl.cam.ac.uk/ftp/users/djw3/xxtea.ps (1998)
//
// JavaScript implementation: Chris Veness, Movable Type Ltd: www.movable-type.co.uk
//


//
// TEAencrypt: Use Corrected Block TEA to encrypt plaintext using password
//            (note plaintext & password must be strings not string objects)
//
// Return encrypted text as string
//
function TEAencrypt(plaintext, password)
{
   if (plaintext.length == 0) return('');  // nothing to encrypt
   // 'escape' plaintext so chars outside ISO-8859-1 work in single-byte packing, but
   // keep spaces as spaces (not '%20') so encrypted text doesn't grow too long, and
   // convert result to longs
   var v = strToLongs(escape(plaintext).replace(/%20/g,' '));
   if (v.length <= 1) v[1] = 0;  // algorithm doesn't work for n<2 so fudge by adding nulls

   // will(a)ndri.st: make password become a SHA 1 Hash of itself
   password = do_sha1(password);
   var k = strToLongs(password.slice(0,16));  // simply convert first 16 chars of password as key
   var n = v.length;

   var z = v[n-1], y = v[0], delta = 0x9E3779B9;
   //var mx, e, q = Math.floor(6 + 52/n), sum = 0;
   var mx, e, q = Math.floor(16 + 52/n), sum = 0;   // WA: increase encryption level by extending rounds from former 6 to 16

   while (q-- > 0) {  // 6 + 52/n operations gives between 6 & 32 mixes on each word
       sum += delta;
       e = sum>>>2 & 3;
       for (var p = 0; p < n-1; p++) {
           y = v[p+1];
           mx = (z>>>5 ^ y<<2) + (y>>>3 ^ z<<4) ^ (sum^y) + (k[p&3 ^ e] ^ z)
           z = v[p] += mx;
       }
       y = v[0];
       mx = (z>>>5 ^ y<<2) + (y>>>3 ^ z<<4) ^ (sum^y) + (k[p&3 ^ e] ^ z)
       z = v[n-1] += mx;
   }
   // note use of >>> in place of >> due to lack of 'unsigned' type in JavaScript
   // (thanks to Karsten Kraus @ swr3 for this)

   result = (longsToStr(v));
   // added by WA: Output is expected to be in Base64 encoding to support pocket Note formatting.
   return encodeBase64(result);

}

//---------
// TEAdecrypt: Use Corrected Block TEA to decrypt ciphertext using password
//
function TEAdecrypt(ciphertext, password)
{
   // added by WA: Choose encrypted text from URL instead of input field
    var URLwert = do_URLcontent("" + document.URL);
    if (URLwert == "-") {
      ciphertext = ciphertext;
    } else {
      ciphertext = URLwert;
    }
   if (ciphertext.length == 0) return('');

    // added by WA: Input is expected to be in Base64 encoding
     ciphertext = decodeBase64(ciphertext)
     var v = strToLongs(unescCtrlCh(ciphertext));

   // will(a)ndri.st: make password become a SHA 1 Hash of itself;
     password = do_sha1(password);

   var k = strToLongs(password.slice(0,16));
   var n = v.length;

   var z = v[n-1], y = v[0], delta = 0x9E3779B9;
   //    var mx, e, q = Math.floor(6 + 52/n), sum = q*delta;
   var mx, e, q = Math.floor(16 + 52/n), sum = q*delta;     /// increased security by changing from 6 to 16. Might become 3times slower though

   while (sum != 0) {
       e = sum>>>2 & 3;
       for (var p = n-1; p > 0; p--) {
           z = v[p-1];
           mx = (z>>>5 ^ y<<2) + (y>>>3 ^ z<<4) ^ (sum^y) + (k[p&3 ^ e] ^ z)
           y = v[p] -= mx;
       }
       z = v[n-1];
       mx = (z>>>5 ^ y<<2) + (y>>>3 ^ z<<4) ^ (sum^y) + (k[p&3 ^ e] ^ z)
       y = v[0] -= mx;
       sum -= delta;
   }

   var plaintext = longsToStr(v);
   // strip trailing null chars resulting from filling 4-char blocks:
   if (plaintext.search(/\0/) != -1) plaintext = plaintext.slice(0, plaintext.search(/\0/));
   return unescape(plaintext);
}


// supporting functions

function strToLongs(s) {  // convert string to array of longs, each containing 4 chars
   // note chars must be within ISO-8859-1 (with Unicode code-point < 256) to fit 4/long
   var l = new Array(Math.ceil(s.length/4))
   for (var i=0; i<l.length; i++) {
       // note little-endian encoding - endianness is irrelevant as long as
       // it is the same in longsToStr()
       l[i] = s.charCodeAt(i*4) + (s.charCodeAt(i*4+1)<<8) +
              (s.charCodeAt(i*4+2)<<16) + (s.charCodeAt(i*4+3)<<24);
   }
   return l;  // note running off the end of the string generates nulls since
}              // bitwise operators treat NaN as 0

function longsToStr(l) {  // convert array of longs back to string
   var a = new Array(l.length);
   for (var i=0; i<l.length; i++) {
       a[i] = String.fromCharCode(l[i] & 0xFF, l[i]>>>8 & 0xFF,
                                  l[i]>>>16 & 0xFF, l[i]>>>24 & 0xFF);
   }
   return a.join('');  // use Array.join() rather than repeated string appends for efficiency
}

function escCtrlCh(str) {  // escape control chars which might cause problems with encrypted texts
   return str.replace(/[\0\n\v\f\r!]/g, function(c) { return '!' + c.charCodeAt(0) + '!'; });
}

function unescCtrlCh(str) {  // unescape potentially problematic nulls and control characters
   return str.replace(/!\d\d?!/g, function(c) { return String.fromCharCode(c.slice(1,-1)); });
}

// -----------------
// Read URL: Detect content of encrypted test, starting after  ...htm?e=....
// added by WA
// -----------------
function do_URLcontent(URLx)
{
   fullurl = URLx;
   if (fullurl.indexOf('?') > 0) {
     URLx = fullurl.substring(fullurl.indexOf('?')+3, fullurl.length);
   } else {
      URLx = "-";
   }
 return (URLx);
}


//--------------------------------------------------
// Hex64Base for Cipher Text to prevent Unicode conversion Problems
// added by will(a)ndri.st, source ostermiller.org
//-------------------------------------------------
var END_OF_INPUT = -1;

var base64Chars = new Array(
   'A','B','C','D','E','F','G','H',
   'I','J','K','L','M','N','O','P',
   'Q','R','S','T','U','V','W','X',
   'Y','Z','a','b','c','d','e','f',
   'g','h','i','j','k','l','m','n',
   'o','p','q','r','s','t','u','v',
   'w','x','y','z','0','1','2','3',
   '4','5','6','7','8','9','+','/'
);

var reverseBase64Chars = new Array();
for (var i=0; i < base64Chars.length; i++){
   reverseBase64Chars[base64Chars[i]] = i;
}

var base64Str;
var base64Count;
function setBase64Str(str){
   base64Str = str;
   base64Count = 0;
}
function readBase64(){
   if (!base64Str) return END_OF_INPUT;
   if (base64Count >= base64Str.length) return END_OF_INPUT;
   var c = base64Str.charCodeAt(base64Count) & 0xff;
   base64Count++;
   return c;
}
function encodeBase64(str){
   setBase64Str(str);
   var result = '';
   var inBuffer = new Array(3);
   var lineCount = 0;
   var done = false;
   while (!done && (inBuffer[0] = readBase64()) != END_OF_INPUT){
       inBuffer[1] = readBase64();
       inBuffer[2] = readBase64();
       result += (base64Chars[ inBuffer[0] >> 2 ]);
       if (inBuffer[1] != END_OF_INPUT){
           result += (base64Chars [(( inBuffer[0] << 4 ) & 0x30) | (inBuffer[1] >> 4) ]);
           if (inBuffer[2] != END_OF_INPUT){
               result += (base64Chars [((inBuffer[1] << 2) & 0x3c) | (inBuffer[2] >> 6) ]);
               result += (base64Chars [inBuffer[2] & 0x3F]);
           } else {
               result += (base64Chars [((inBuffer[1] << 2) & 0x3c)]);
               result += ('=');
               done = true;
           }
       } else {
           result += (base64Chars [(( inBuffer[0] << 4 ) & 0x30)]);
           result += ('=');
           result += ('=');
           done = true;
       }
       lineCount += 4;
       if (lineCount >= 76){
           result += ('\n');
           lineCount = 0;
       }
   }
   return result;
}
function readReverseBase64(){
   if (!base64Str) return END_OF_INPUT;
   while (true){
       if (base64Count >= base64Str.length) return END_OF_INPUT;
       var nextCharacter = base64Str.charAt(base64Count);
       base64Count++;
       if (reverseBase64Chars[nextCharacter]){
           return reverseBase64Chars[nextCharacter];
       }
       if (nextCharacter == 'A') return 0;
   }
   return END_OF_INPUT;
}

function ntos(n){
   n=n.toString(16);
   if (n.length == 1) n="0"+n;
   n="%"+n;
   return unescape(n);
}

function decodeBase64(str){
   setBase64Str(str);
   var result = "";
   var inBuffer = new Array(4);
   var done = false;
   while (!done && (inBuffer[0] = readReverseBase64()) != END_OF_INPUT
       && (inBuffer[1] = readReverseBase64()) != END_OF_INPUT){
       inBuffer[2] = readReverseBase64();
       inBuffer[3] = readReverseBase64();
       result += ntos((((inBuffer[0] << 2) & 0xff)| inBuffer[1] >> 4));
       if (inBuffer[2] != END_OF_INPUT){
           result +=  ntos((((inBuffer[1] << 4) & 0xff)| inBuffer[2] >> 2));
           if (inBuffer[3] != END_OF_INPUT){
               result +=  ntos((((inBuffer[2] << 6)  & 0xff) | inBuffer[3]));
           } else {
               done = true;
           }
       } else {
           done = true;
       }
   }
   return result;
}

//--------------------------------------------------
// Hex in Unicode - changes SHA-1 Hash result from two digit Hex in single characters
// added by WA, source ostermiller.org
//-------------------------------------------------

function decodeHex(str){
   str = str.replace(new RegExp("s/[^0-9a-zA-Z]//g"));
   var result = "";
   var nextchar = "";
   for (var i=0; i<str.length; i++){
       nextchar += str.charAt(i);
       if (nextchar.length == 2){
           result += ntos(eval('0x'+nextchar));
           nextchar = "";
       }
   }
   return result;

}



//----------------------------------
// SHA-1
// added by will(a)ndri.st, source by ostermiller.org
//----------------------------------

// accumulate values to put into text area
var accumulated_output_info;

// add a labeled value to the text area
function accumulate_output( str )
{
  accumulated_output_info = accumulated_output_info + str + "\n";
}

// convert a 32-bit value to a 8-char hex string
function cvt_hex( val )
{
  var str="";
  var i;
  var v;

  for( i=7; i>=0; i-- )
  {
     v = (val>>>(i*4))&0x0f;
     str += v.toString(16);
  }
  return str;
}

// add a bit string to the output, inserting spaces as designated
function accumulate_val( label, val )
{
  accumulated_output_info += label + cvt_hex(val) + "\n";
}

// return a hex value LSB first
function lsb_hex( val )
{
  var str="";
  var i;
  var vh;
  var vl;

  for( i=0; i<=6; i+=2 )
  {
     vh = (val>>>(i*4+4))&0x0f;
     vl = (val>>>(i*4))&0x0f;
     str += vh.toString(16) + vl.toString(16);
  }
  return str;
}

// rotate left circular
function rotate_left( n, s )
{
  var t4 = ( n<<s ) | (n>>>(32-s));
//   accumulate_output( "  "+cvt_hex(n)+"<<<"+s+"="+cvt_hex(t4) );
  return t4;
}

// calculate the hash
function do_sha1(msg)
{
  var blockstart;			// which block of words from the dataare we using now?
  var i, j;
  var W = new Array(80);
  // initial constants
  var H0 = 0x67452301;
  var H1 = 0xEFCDAB89;
  var H2 = 0x98BADCFE;
  var H3 = 0x10325476;
  var H4 = 0xC3D2E1F0;
  // working variables
  var A, B, C, D, E;
  var temp;

  // initialize detail output string
  accumulated_output_info="";

  // get message to hash
  //var msg = document.stuff.inmsg.value;

  // note current length
  var msg_len = msg.length;

  // convert to a 32-bit word array
  var word_array = new Array();
  for( i=0; i<msg_len-3; i+=4 )
  {
     // convert 4 bytes to a word
     j = msg.charCodeAt(i)<<24 | msg.charCodeAt(i+1)<<16 |
   msg.charCodeAt(i+2)<<8 | msg.charCodeAt(i+3);
     word_array.push( j );
     accumulate_val( msg.substr(i, 4)+": ", j );
  }

  // handle final bits, add beginning of padding: 1 bit, then 0 bits
  switch( msg_len % 4 )
  {
     case 0:
        // text length was a multiple of 4 bytes, start padding
        i = 0x080000000;				// 4 bytes padding
        break;

     case 1:
        // one byte of text left
        i = msg.charCodeAt(msg_len-1)<<24 | 0x0800000;	// 3 bytes padding
        break;

     case 2:
        // two bytes of text left
        i = msg.charCodeAt(msg_len-2)<<24 | msg.charCodeAt(msg_len-1)<<16
   | 0x08000;				// 2 bytes padding
        break;

     case 3:
        // three bytes of text left
        i = msg.charCodeAt(msg_len-3)<<24 | msg.charCodeAt(msg_len-2)<<16
   | msg.charCodeAt(msg_len-1)<<8	| 0x80;	// 1 byte padding
        break;

     default:
        window.alert("Something went weird in the switch!")
        return;
  }
  accumulate_output( "length="+msg_len );
  accumulate_val( "length%4="+(msg_len%4)+", padding=", i );

  // handle the end of the text and beginning of the padding
  word_array.push( i );

  // pad to 448 bits (mod 512 bits) = 14 words (mod 16 words)
  while( (word_array.length % 16) != 14 )
     word_array.push( 0 );

  // add 64-bit message length (in bits)
  word_array.push( msg_len>>>29 );
  word_array.push( (msg_len<<3)&0x0ffffffff );

  for( i=0; i<word_array.length; i++ )
     accumulate_output( "msg[" + i + "]=" + cvt_hex( word_array[i] ) );

  // Process each 16-word block.
  for ( blockstart=0; blockstart<word_array.length; blockstart+=16 )
  {
     accumulate_output( "Starting block at word "+blockstart );

     // create entries in W array
     for( i=0; i<16; i++ )
        W[i] = word_array[blockstart+i];
     for( i=16; i<=79; i++ )
        W[i] = rotate_left(W[i-3] ^ W[i-8] ^ W[i-14] ^ W[i-16], 1);
     for( i=0; i<=79; i++ )
        accumulate_output( "W[" + i + "]=" + cvt_hex( W[i] ) );

     // copy state
     A = H0;
     B = H1;
     C = H2;
     D = H3;
     E = H4;

     // note start of round values
     accumulate_output("A=" + cvt_hex(A) + " B=" + cvt_hex(B) + " C=" + cvt_hex(C)
   + " D=" + cvt_hex(D) + " E=" + cvt_hex(E) );

     // update state variables
     for( i= 0; i<=19; i++ )
     {
        temp = (rotate_left(A,5) + ((B&C) | (~B&D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;

        // update state
        E = D;
        D = C;
        C = rotate_left(B,30);
        B = A;
        A = temp;
        accumulate_output( "i="+i+" A=" + cvt_hex(A) + " B=" + cvt_hex(B) + " C=" + cvt_hex(C)
   + " D=" + cvt_hex(D) + " E=" + cvt_hex(E) );
     }

     for( i=20; i<=39; i++ )
     {
        temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;

        // update state
        E = D;
        D = C;
        C = rotate_left(B,30);
        B = A;
        A = temp;
        accumulate_output( "i="+i+" A=" + cvt_hex(A) + " B=" + cvt_hex(B) + " C=" + cvt_hex(C)
   + " D=" + cvt_hex(D) + " E=" + cvt_hex(E) );
     }

     for( i=40; i<=59; i++ )
     {
        temp = (rotate_left(A,5) + ((B&C) | (B&D) | (C&D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;

        // update state
        E = D;
        D = C;
        C = rotate_left(B,30);
        B = A;
        A = temp;
        accumulate_output( "i="+i+" A=" + cvt_hex(A) + " B=" + cvt_hex(B) + " C=" + cvt_hex(C)
   + " D=" + cvt_hex(D) + " E=" + cvt_hex(E) );
     }

     for( i=60; i<=79; i++ )
     {
       temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0x6CA62C1D6) & 0x0ffffffff;

        // update state
        E = D;
        D = C;
        C = rotate_left(B,30);
        B = A;
        A = temp;
        accumulate_output( "i="+i+" A=" + cvt_hex(A) + " B=" + cvt_hex(B) + " C=" + cvt_hex(C)
   + " D=" + cvt_hex(D) + " E=" + cvt_hex(E) );
     }

     H0 = (H0 + A) & 0x0ffffffff;
     H1 = (H1 + B) & 0x0ffffffff;
     H2 = (H2 + C) & 0x0ffffffff;
     H3 = (H3 + D) & 0x0ffffffff;
     H4 = (H4 + E) & 0x0ffffffff;

     accumulate_output( "H0=" + cvt_hex(H0) + " H1=" + cvt_hex(H1) + " H2=" + cvt_hex(H2)
   + " H3=" + cvt_hex(H3) + " H4=" + cvt_hex(H4) );
  } // of loop on i

  // process output
  // document.stuff.outhash.value = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);
  // document.stuff.details.value = accumulated_output_info;
  result = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);

  // will(a)ndri.st returns two digit hex code into unicode single characters
  return decodeHex(result);
}
