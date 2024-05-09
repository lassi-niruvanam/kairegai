import த from './த.json' with { type: 'json' };
import ខ្មែរ from './ខ្មែរ.json' with { type: 'json' };
import दे from './देव.json' with { type: 'json' };
import { ltn } from './ltn.js';

export {இலாத்தின்_அடைப்புகள்} from './ltn.js';

export interface அடைப்பு_தகவல்கள் {
  முன்னோட்டு: string;
  எழுத்துருகள்: string;
}

export const எழுத்துகள்_அடைப்புகள்: {
  [key: string]: {
    [key: string]: அடைப்பு_தகவல்கள்;
  };
} = {
  दे,
  த,
  ខ្មែរ,
  ltn,
};
