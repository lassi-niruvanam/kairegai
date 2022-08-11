import {கைரேகைை_பகுப்பாய்வு} from './பகுப்பாய்வு';
import {இலாத்தின்_அடைப்புகள்} from './எழுத்துகள்';
import { எழுத்து_மாறு } from './மாற்றம்'

export function படி({கைரேகை}: {கைரேகை: string}): {
  எழுத்து: string;
  குறிமுறை: string;
  மதிப்பு: Uint8Array;
} {
  const {எழுத்து, குறிமுறை} = கைரேகைை_பகுப்பாய்வு({கைரேகை});
  const மாற்றி = இலாத்தின்_அடைப்புகள்[குறிமுறை as keyof typeof இலாத்தின்_அடைப்புகள்];

  const இலாத்தின்_கைரேகை = எழுத்து_மாறு({
    கைரேகை, எழுத்து: 'latin'
  })
  const மதிப்பு = மாற்றி.decode(இலாத்தின்_கைரேகை);
  return {மதிப்பு, எழுத்து, குறிமுறை};
}
