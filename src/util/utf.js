/* utf.js - UTF-8 <=> UTF-16 convertion
 *
 * Copyright (C) 1999 Masanao Izumo <iz@onicos.co.jp> & 2006 Ma Bingyao <andot@ujn.edu.cn>
 * Version: 1.1
 * LastModified: Feb 17 2006
 * This library is free.  You can redistribute it and/or modify it.
 */

/*
 * Interfaces:
 * utf8 = utf16to8(utf16);
 * utf16 = utf16to8(utf8);
 */

export function utf16to8 (str) {
  var out, i, len, c
  out = []
  len = str.length
  for (i = 0; i < len; i++) {
    c = str.charCodeAt(i)
    if ((c >= 0x0001) && (c <= 0x007F)) {
      out[i] = str.charAt(i)
    } else if (c > 0x07FF) {
      out[i] = String.fromCharCode(0xE0 | ((c >> 12) & 0x0F),
                                   0x80 | ((c >> 6) & 0x3F),
                                   0x80 | ((c >> 0) & 0x3F))
    } else {
      out[i] = String.fromCharCode(0xC0 | ((c >> 6) & 0x1F),
                                   0x80 | ((c >> 0) & 0x3F))
    }
  }
  return out.join('')
}

export function utf8to16 (str) {
  var out, i, len, c
  var char2, char3

  out = []
  len = str.length
  i = 0
  while (i < len) {
    c = str.charCodeAt(i++)
    switch (c >> 4) {
      case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
        // 0xxxxxxx
        out[out.length] = str.charAt(i - 1)
        break
      case 12: case 13:
        // 110x xxxx   10xx xxxx
        char2 = str.charCodeAt(i++)
        out[out.length] = String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F))
        break
      case 14:
      // 1110 xxxx  10xx xxxx  10xx xxxx
        char2 = str.charCodeAt(i++)
        char3 = str.charCodeAt(i++)
        out[out.length] = String.fromCharCode(((c & 0x0F) << 12) |
          ((char2 & 0x3F) << 6) | ((char3 & 0x3F) << 0))
        break
    }
  }

  return out.join('')
}
