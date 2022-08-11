import {base2} from 'multiformats/bases/base2';
import {base8} from 'multiformats/bases/base8';
import {base10} from 'multiformats/bases/base10';
import {base16, base16upper} from 'multiformats/bases/base16';
import {
  base32,
  base32z,
  base32hex,
  base32pad,
  base32upper,
  base32hexpad,
  base32hexupper,
  base32padupper,
  base32hexpadupper,
} from 'multiformats/bases/base32';
import {base36, base36upper} from 'multiformats/bases/base36';
import {base58btc, base58flickr} from 'multiformats/bases/base58';
import {
  base64,
  base64pad,
  base64url,
  base64urlpad,
} from 'multiformats/bases/base64';

// https://github.com/multiformats/multibase
// https://github.com/multiformats/js-multiformats/blob/master/src/bases/base.js
// https://github.com/multiformats/js-multiformats/blob/master/src/cid.js

export const இலாத்தின்_அடைப்புகள் = {
  base2,
  base8,
  base10,
  base16,
  base16upper,
  base32,
  base32z,
  base32hex,
  base32pad,
  base32upper,
  base32hexpad,
  base32hexupper,
  base32padupper,
  base32hexpadupper,
  base36,
  base36upper,
  base58btc,
  base58flickr,
  base64,
  base64pad,
  base64url,
  base64urlpad,
};

const இலாத்தின்_எழுத்துகள்: {[key: string]: string} = {
  base2: '01',
  base8: '01234567',
  base10: '0123456789',
  base16: '0123456789abcdef',
  base16upper: '0123456789ABCDEF',
  base32: 'abcdefghijklmnopqrstuvwxyz234567',
  base32z: 'ybndrfg8ejkmcpqxot1uwisza345h769',
  base32hex: '0123456789abcdefghijklmnopqrstuv',
  base32pad: 'abcdefghijklmnopqrstuvwxyz234567=',
  base32upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
  base32hexpad: '0123456789abcdefghijklmnopqrstuv=',
  base32hexupper: '0123456789ABCDEFGHIJKLMNOPQRSTUV',
  base32padupper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=',
  base32hexpadupper: '0123456789ABCDEFGHIJKLMNOPQRSTUV=',
  base36: '0123456789abcdefghijklmnopqrstuvwxyz',
  base36upper: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  base58btc: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
  base58flickr: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ',
  base64: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
  base64pad:
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
  base64url: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
  base64urlpad:
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=',
};

export const ltn = Object.fromEntries(
  Object.entries(இலாத்தின்_அடைப்புகள்).map(([அடைப்பு, மாற்றி]) => {
    return [
      மாற்றி.name,
      {
        முன்னோட்டு: மாற்றி.prefix,
        எழுத்துருகள்:
          இலாத்தின்_எழுத்துகள்[அடைப்பு as keyof typeof இலாத்தின்_அடைப்புகள்],
      },
    ];
  })
);
