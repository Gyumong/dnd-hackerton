'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { useCarousel } from '@/app/request-form/hooks/useCarousel';
import { useSearchParams } from 'next/navigation';

const GachaLoadingPage = () => {
  const step = Number(useSearchParams().get('step'));
  const { setCarouselIndexNext } = useCarousel();
  useEffect(() => {
    // 컴포넌트가 마운트된 후 3초 뒤에 실행될 함수
    const timer = setTimeout(() => {
      // 여기에 페이지 이동하고 싶은 경로를 지정합니다. 예: '/home'
      if (step === 4) {
        setCarouselIndexNext();
      }
    }, 3000); // 3000ms = 3초 후에 실행

    return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머를 정리합니다.
  }, [step, setCarouselIndexNext]); // 의존성 배열에 router를 추가합니다.
  return (
    <div className="relative flex flex-col items-center">
      {/** 여기 아래 페이지를 서버에서 받는 다고 함 서울 */}
      <p className="px-[60px] pt-[80px] text-[20px] font-[700] text-[#202020]">
        감사 가챠를 등록하는 중이에요!
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
        />
        <Image
          src="/icons/green.gif"
          width={120}
          height={120}
          alt="red-gif-2"
          className="absolute"
          style={{ top: '37%', left: '50%' }}
        />
        <Image
          src="/icons/yellow.gif"
          width={120}
          height={120}
          alt="red-gif-3"
          className="absolute"
          style={{ top: '21%', left: '28%' }}
        />
      </div>
    </div>
  );
};

export default GachaLoadingPage;
