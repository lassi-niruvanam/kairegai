import { கைரேகைை_பகுப்பாய்வு } from "./பகுப்பாய்வு";
import { எழுத்துகள்_அடைப்புகள் } from "./எழுத்துகள்"

export function எழுத்து_மாறு({
  கைரேகை,
  எழுத்து
}: {
  கைரேகை: string;
  எழுத்து: string;
}): string {
  const { எழுத்து: மூல்_எழுத்து, குறிமுறை } = கைரேகைை_பகுப்பாய்வு({கைரேகை});

  const மூல்_எழுத்துருகள் = [...எழுத்துகள்_அடைப்புகள்[மூல்_எழுத்து][குறிமுறை].எழுத்துருகள்];

  const { எழுத்துருகள், முன்னோட்டு } = எழுத்துகள்_அடைப்புகள்[எழுத்து][குறிமுறை];
  const வேண்டிய_எழுத்துருகள் = [...எழுத்துருகள்];

  return [
    முன்னோட்டு,
    ...[...கைரேகை.slice(1)].map(
      இ => வேண்டிய_எழுத்துருகள்[மூல்_எழுத்துருகள்.indexOf(இ)]
    )
  ].join();
}
