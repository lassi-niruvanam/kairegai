import {கைரேகைை_பகுப்பாய்வு} from '@/குறியீட்டு.js';
import { expect } from "aegir/chai";


describe('இலாத்தின் எழுத்து', () => {
  const கைரேகை = 'mAYAEEiCTojlxqRTl6svwqNJRVM2jCcPBxy+7mRTUfGDzy2gViA';
  const {எழுத்து, குறிமுறை} = கைரேகைை_பகுப்பாய்வு({கைரேகை});

  it('சரியான எழுத்து', () => {
    expect(எழுத்து).to.equal('ltn');
  });

  it('சரியான குறிமுறை', () => {
    expect(குறிமுறை).to.equal('base64');
  });
});
