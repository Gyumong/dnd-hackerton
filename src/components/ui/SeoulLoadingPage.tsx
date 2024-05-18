'use client';

import Image from 'next/image';
import { useState } from 'react';
import SeoulResultModal from './SeoulResultModal';

const SeoulLoadingPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div className="relative flex flex-col items-center">
      {/** 여기 아래 페이지를 서버에서 받는 다고 함 서울 */}
      <p className="px-[60px] pt-[80px] text-[20px] font-[700] text-[#202020]">
        여기 데이터 입력해 주세요 민규님
      </p>
      <div className="relative pt-[48px]">
        <Image
          src="/icons/mini-gacha.svg"
          width={290}
          height={487}
          alt="mini-gacha"
          className="z-10"
        />
        <Image
          src="/icons/red.gif"
          width={120}
          height={120}
          alt="red-gif-1"
          className="absolute"
          style={{ top: '37%', left: '10%' }}
          onClick={handleClick}
        />
        <Image
          src="/icons/green.gif"
          width={120}
          height={120}
          alt="red-gif-2"
          className="absolute"
          style={{ top: '37%', left: '50%' }}
          onClick={handleClick}
        />
        <Image
          src="/icons/yellow.gif"
          width={120}
          height={120}
          alt="red-gif-3"
          className="absolute"
          style={{ top: '21%', left: '28%' }}
          onClick={handleClick}
        />
      </div>
      {showModal && <SeoulResultModal setShowModal={setShowModal} />}
    </div>
  );
};

export default SeoulLoadingPage;
