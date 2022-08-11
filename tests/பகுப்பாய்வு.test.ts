import {கைரேகைை_பகுப்பாய்வு} from '../src/index';

describe('இலாத்தின் எழுத்து', () => {
  const கைரேகை = 'mAYAEEiCTojlxqRTl6svwqNJRVM2jCcPBxy+7mRTUfGDzy2gViA';
  const {எழுத்து, குறிமுறை} = கைரேகைை_பகுப்பாய்வு({கைரேகை});

  it('சரியான எழுத்து', () => {
    expect(எழுத்து).toEqual('latin');
  });

  it('சரியான குறிமுறை', () => {
    expect(குறிமுறை).toEqual('base64');
  });
});
