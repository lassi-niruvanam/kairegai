import {Codec} from 'multiformats/bases/base';
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

function getFileNameOnly(filePath: string): string {
  return filePath.split('/').pop()!.split('.').shift()!;
}

interface அடைப்பு_தகவல்கள் {
  முன்னோட்டு: string;
  எழுத்துருகள்: string;
}

// https://stackoverflow.com/questions/40532230/how-can-i-automatically-load-all-json-files-from-a-given-directory-in-webpack
function loadJson() {
  const requireContext = require.context('json!./எழுத்துகள்', false, /\.json$/);
  const json: {[key: string]: {[key: string]: அடைப்பு_தகவல்கள்}} = {};
  requireContext.keys().forEach(key => {
    const obj: {[key: string]: அடைப்பு_தகவல்கள்} = requireContext(key);
    const simpleKey = getFileNameOnly(key);
    json[simpleKey] = obj;
  });
  return json;
}

const எழுத்துகள்_அடைப்புகள் = loadJson();
const எழுத்துகள் = Object.keys(எழுத்துகள்_அடைப்புகள்);

// https://github.com/multiformats/multibase
// https://github.com/multiformats/js-multiformats/blob/master/src/bases/base.js
// https://github.com/multiformats/js-multiformats/blob/master/src/cid.js

const இலாத்தின்_அடைப்புகள் = {
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

const baseX_அடைப்புகள் = ['base10', 'base36', 'base58'];

export const __$மாற்றியை_பெறு = ({
  எழுத்து,
  குறிமுறை,
}: {
  எழுத்து: string;
  குறிமுறை: string;
}): Codec<string, string> => {
  if (எழுத்து === 'latin') {
    if (Object.keys(இலாத்தின்_அடைப்புகள்).includes(குறிமுறை))
      return இலாத்தின்_அடைப்புகள்[
        குறிமுறை as keyof typeof இலாத்தின்_அடைப்புகள்
      ];
    throw `${எழுத்து} எழுத்துக்கு தெரியாத குறிமுறை ${குறிமுறை}`;
  }

  const எழுத்து_அடைப்புகள் = எழுத்துகள்_அடைப்புகள்[எழுத்து];

  const எழுத்து_அடைப்பு = எழுத்து_அடைப்புகள்[குறிமுறை];
  if (!எழுத்து_அடைப்பு)
    throw `${எழுத்து} எழுத்துக்கு தெரியாத குறிமுறை ${குறிமுறை}`;

  const {எழுத்துருகள், முன்னோட்டு} = எழுத்து_அடைப்பு;
  const வேண்டிய_அடைப்பு_தகவல்கள் = {
    name: `${குறிமுறை}-${எழுத்து}`,
    prefix: முன்னோட்டு,
    alphabet: எழுத்துருகள்,
    bitsPerChar: Math.floor(Math.log2(எழுத்துருகள்.length)),
  };
  const உருவாக்கி = baseX_அடைப்புகள்.find(இ => குறிமுறை.startsWith(இ))
    ? baseX
    : rfc4648;

  return உருவாக்கி(வேண்டிய_அடைப்பு_தகவல்கள்);
};

export const கைரேகையை_பகுப்பாய்வு = ({
  கைரேகை,
}: {
  கைரேகை: string;
}): {எழுத்து: string; குறிமுறை: string} => {
  const மூனோட்டு = [...கைரேகை][0];

  const இலாத்தின்_மாற்றி = Object.values(இலாத்தின்_அடைப்புகள்).find(
    இ => இ.prefix === மூனோட்டு
  );
  if (இலாத்தின்_மாற்றி)
    return {எழுத்து: 'latin', குறிமுறை: இலாத்தின்_மாற்றி.name};

  for (const எ of எழுத்துகள்) {
    const மாற்றி_தகவல்கள் = Object.entries(எழுத்துகள்_அடைப்புகள்[எ]).find(
      இ => இ[1].முன்னோட்டு === மூனோட்டு
    );
    if (மாற்றி_தகவல்கள்) return {எழுத்து: எ, குறிமுறை: மாற்றி_தகவல்கள்[0]};
  }
  throw `தெரியாத மூனோட்டு ${மூனோட்டு} (கைரேகை: ${கைரேகை})`;
};
