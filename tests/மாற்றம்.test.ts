import {கைரேகைை_பகுப்பாய்வு, எழுத்துகள்_அடைப்புகள், எழுத்து_மாறு} from '../src/index';
import { இலாத்தின்_அடைப்புகள் } from "../src/எழுத்துகள்";

describe('எல்லாம் எழுத்துகள்', () => {
  const மூல்_கைரேகை = 'mAYAEEiCTojlxqRTl6svwqNJRVM2jCcPBxy+7mRTUfGDzy2gViA';
  const மூல்_எண் = இலாத்தின்_அடைப்புகள்['base64'].decode(மூல்_கைரேகை);

  Object.keys(எழுத்துகள்_அடைப்புகள்).forEach(எழுத்து => {
    Object.keys(எழுத்துகள்_அடைப்புகள்[எழுத்து]).forEach(குறிமுறை => {
      it(எழுத்து + ' ' + குறிமுறை, ()=>{
        const குறிமுறையின்_மூல்_இலாத்தின்_கைரேகை = இலாத்தின்_அடைப்புகள்[குறிமுறை as keyof typeof இலாத்தின்_அடைப்புகள்].encode(மூல்_எண்);

        const மாற்றப்பட்ட_கைரேகை = எழுத்து_மாறு({கைரேகை: குறிமுறையின்_மூல்_இலாத்தின்_கைரேகை, எழுத்து});
        const { எழுத்து: கிடைத்த_எழுத்து, குறிமுறை: கிடைத்த_குறிமுறை} = கைரேகைை_பகுப்பாய்வு({கைரேகை: மாற்றப்பட்ட_கைரேகை});

        expect(கிடைத்த_எழுத்து).toEqual(எழுத்து);
        expect(கிடைத்த_குறிமுறை).toEqual(குறிமுறை);
      });

    })
  });

});
