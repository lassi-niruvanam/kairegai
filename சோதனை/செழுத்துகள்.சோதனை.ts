import {எழுத்துகள்_அடைப்புகள்} from '@/எழுத்துகள்/குறியீட்டு.js';
import { expect } from "aegir/chai";

it('எல்லோருக்கும் முன்னோட்டு, எழுத்துருகள் இருக்கு', () => {
  for (const தகவல்கள் of Object.values(எழுத்துகள்_அடைப்புகள்)) {
    for (const அடைப்பு_தகவல்கள் of Object.values(தகவல்கள்)) {
      expect(Object.keys(அடைப்பு_தகவல்கள்)).to.deep.equal(
        ['முன்னோட்டு', 'எழுத்துருகள்']
      );
    }
  }
});

it('நகல் முன்னோட்டு இருக்க கூடாது', () => {
  const பார்த்தது: {[key: string]: {எழுத்து: string; அடைப்பு: string}} = {};
  for (const [எழுத்து, தகவல்கள்] of Object.entries(எழுத்துகள்_அடைப்புகள்)) {
    for (const [அடைப்பு, அடைப்பு_தகவல்கள்] of Object.entries(தகவல்கள்)) {
      const {முன்னோட்டு} = அடைப்பு_தகவல்கள்;

      if (பார்த்தது[முன்னோட்டு]) {
        console.error(
          `இந்த அடைப்புகளுக்கு ஒரே முன்னோட்டு (${முன்னோட்டு}) - ${எழுத்து}: ${அடைப்பு} மற்றும் ${பார்த்தது[முன்னோட்டு].எழுத்து}: ${பார்த்தது[முன்னோட்டு].அடைப்பு}`
        );
      }
      expect(Object.keys(பார்த்தது)).to.not.contain(முன்னோட்டு);
      பார்த்தது[முன்னோட்டு] = {எழுத்து, அடைப்பு};
    }
  }
});

it('எழுத்துருகளுக்கு பொறுத்தமான நீளம் உள்ளது', () => {
  for (const [எழுத்து, தகவல்கள்] of Object.entries(எழுத்துகள்_அடைப்புகள்)) {
    for (const [அடைப்பு, அடைப்பு_தகவல்கள்] of Object.entries(தகவல்கள்)) {
      let நீளம் = Number.parseInt(அடைப்பு.replace('base', ''));
      if (அடைப்பு.indexOf('pad') >= 0) நீளம் += 1;

      if (நீளம் !== அடைப்பு_தகவல்கள்.எழுத்துருகள்.length) {
        console.error(
          `எழுத்துருகளுக்கு பொறுத்தமான நீளம் இலை: எழுத்து - ${எழுத்து}, அடைப்பு - ${அடைப்பு}`
        );
      }
      expect(அடைப்பு_தகவல்கள்.எழுத்துருகள்.length).to.equal(நீளம்);
    }
  }
});
