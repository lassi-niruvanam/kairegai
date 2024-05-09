import * as த from './த.json';
import * as ខ្មែរ from './ខ្មែរ.json';
import * as दे from './देव.json';
import { ltn } from './ltn';

export {இலாத்தின்_அடைப்புகள்} from './ltn';

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
