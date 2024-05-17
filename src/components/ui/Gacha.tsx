'use client';

import { DndTitleFont } from '@/app/fonts';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import AddCapsuleModal from './AddCapsuleModal';
import { Button } from './button';

const Gacha = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="">
      <h1
        className={clsx(
          DndTitleFont.className,
          'whitespace-pre-line px-[16px] pb-[8px] pt-[28px] text-[24px] leading-custom tracking-tighter1 text-dndBlack01',
        )}
      >
        지방러님의 여정 비용은 <br /> <span className="text-dndBlue01"> 뿌링클 치킨 1마리</span>
        값이에요!
      </h1>
      <p className="px-[16px] text-[14px] font-[500] text-[#A8A8A8]">시간 기준으로도 궁금해요!</p>
      <div className="relative mx-auto h-[650px] w-[375px]">
        <Image
          src="/icons/gacha.svg"
          layout="fill"
          objectFit="contain"
          alt="gacha"
          className="absolute left-0 top-0"
        />
        <Image
          src="/icons/capsule1.svg"
          width={265}
          height={265}
          alt="capsule1"
          className="absolute"
          style={{ top: '6%', left: '-3%' }}
        />
        <Image
          src="/icons/capsule2.svg"
          width={224}
          height={224}
          alt="capsule2"
          className="absolute"
          style={{ top: '15%', left: '44%' }}
        />
        <div className="absolute" style={{ top: '32.5%', left: '2%' }}>
          <Image src="/icons/capsule3.svg" width={308} height={308} alt="capsule3" />
          <Image
            src="/icons/capsule-label.svg"
            width={130}
            height={46}
            alt="capsule-label"
            className="absolute cursor-pointer"
            onClick={() => setShowModal((showModal) => true)}
            style={{ top: 'calc(40% - 20px)', left: 'calc(50% - 64px)' }}
          />
        </div>
      </div>
      <div className="flex justify-center pb-[26px] pt-[14px]">
        <Button className="h-[60px] w-[343px] rounded-[10px] bg-[#6687FC] font-[700] text-[#FFF]">
          여정 계산하기
        </Button>
      </div>
      {showModal && <AddCapsuleModal setShowModal={setShowModal} />}
    </div>
  );
};

export default Gacha;
