import { கைரேகையை_பகுப்பாய்வு } from "./மாற்றிகள்";

export function எழுத்து_மாறு(
  { கைரேகை, எழுத்து }: { கைரேகை: string, எழுத்து: string }
): string {
  const { மதிப்பு, குறிமுறை } = படி({கைரேகை});

  const வேண்டிய_மாற்றி = மாற்றியை_பெறு({ எழுத்து, குறிமுறை });
  return வேண்டிய_மாற்றி.encode(மதிப்பு)
}

export function படி({ கைரேகை }: { கைரேகை: string }): { எழுத்து: string, குறிமுறை: string, மதிப்பு: Uint8Array} {
  const { எழுத்து, குறிமுறை } = கைரேகையை_பகுப்பாய்வு({ கைரேகை });
  const மாற்றி = மாற்றியை_பெறு({ எழுத்து, குறிமுறை });

  const மதிப்பு = மாற்றி.decode(கைரேகை)
  return { மதிப்பு, எழுத்து, குறிமுறை }
}

export function சரிபாரு() {
  // நகல் முன்னோட்டு இருக்க கூடாது
  // எல்லோருக்கும் முன்னோட்டு, எழுத்துருகள் இருக்கு
  // எழுத்துருகளுக்கு பொறுத்தமான நீளம் உள்ளது
}
