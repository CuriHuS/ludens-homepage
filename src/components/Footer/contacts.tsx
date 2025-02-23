'use client';

import Image from 'next/image';
import mailLogo from '../../assets/icons/mail.svg';
import instagramLogo from '../../assets/icons/instagram.svg';
import youtubeLogo from '../../assets/icons/youtube.svg';
import { LUDENS_EMAIL, LUDENS_INSTAGRAM, LUDENS_YOUTUBE } from '@/constants/ludens';

function Contacts() {
  const handleClick = (e: React.MouseEvent) => {
    switch (e.currentTarget.id) {
      case 'mail':
        window.open(`mailto:${LUDENS_EMAIL}`);
        break;
      case 'youtube':
        window.open(LUDENS_YOUTUBE);
        break;
      default:
        window.open(LUDENS_INSTAGRAM);
        break;
    }
  };

  return (
    <div className="flex gap-2">
      <Image className="cursor-pointer"
        src={mailLogo}
        width={30}
        height={30}
        id="mail"
        alt="메일"
        onClick={handleClick}
      />
      <Image className="cursor-pointer"
        src={instagramLogo}
        width={30}
        height={30}
        id="instagram"
        alt="인스타그램"
        onClick={handleClick}
      />
      <Image className="cursor-pointer"
        src={youtubeLogo}
        width={30}
        height={30}
        id="youtube"
        alt="유튜브"
        onClick={handleClick}
      />
    </div>
  );
}

export default Contacts;
