'use client';

import { DndTitleFont } from '@/app/fonts';
import clsx from 'clsx';
import Image from 'next/image';
import React, { useState } from 'react';
import AddCapsuleModal from '../../../../components/ui/AddCapsuleModal';
import { Button } from '../../../../components/ui/button';
import { useSearchParams } from 'next/navigation';
import useGetResultQuery from '@/app/request-form/apis/queries/useGetResult';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import SearchIcon from '*.svg';
import DaumPostcode from 'react-daum-postcode';
import FixedBottomWrapper from '@/shared/@common/fixed-bottom-wrapper';
import { useCarousel } from '@/app/request-form/hooks/useCarousel';
import useFinalResult from '@/app/request-form/apis/mutations/useSaveGotcha';
import useSaveGotcha from '@/app/request-form/apis/mutations/useSaveGotcha';

const Gacha = () => {
  const { setCarouselIndexNext } = useCarousel();
  const [showModal, setShowModal] = useState(false);
  const step = Number(useSearchParams().get('step'));
  const [기준, set기준] = useState<any>(null);
  const { data } = useGetResultQuery(step);
  const [가챠, set가챠] = useState<any>(null);
  const { mutateAsync } = useSaveGotcha();

  const onClick = (e: any) => {
    setShowModal((showModal) => !showModal);
    e.stopPropagation();
    console.log('가챠', 가챠);
  };

  const onSubmit = async () => {
    const data = await mutateAsync({
      customGotcha: 가챠,
    });
    setShowModal(false);
    if (data?.success) {
      setCarouselIndexNext();
    }
  };
  return (
    <div className="overflow-hidden">
      <h1
        className={clsx(
          DndTitleFont.className,
          'whitespace-pre-line px-[16px] pb-[8px] pt-[28px] text-[24px] leading-custom tracking-tighter1 text-dndBlack01',
        )}
      >
        지방러님의 여정 비용은 <br />{' '}
        {기준 ? (
          <span className="text-dndBlue01">{data?.data?.jokeByPrice}</span>
        ) : (
          <span className="text-dndBlue01">{data?.data?.jokeByTime}</span>
        )}
        값이에요!
      </h1>
      <p
        className="px-[16px] text-[14px] font-[500] text-[#A8A8A8]"
        onClick={() => set기준((기준: any) => !기준)}
      >
        시간 기준으로도 궁금해요!
      </p>
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
            onClick={onClick}
            style={{ top: 'calc(40% - 20px)', left: 'calc(50% - 64px)' }}
          />
        </div>
      </div>
      <div className="flex justify-center pb-[26px] pt-[14px]">
        <Button className="h-[60px] w-[343px] rounded-[10px] bg-[#6687FC] font-[700] text-[#FFF]">
          여정 계산하기
        </Button>
      </div>
      <Drawer open={showModal}>
        <DrawerContent>
          <div>
            <div
              className="flex h-full w-full max-w-[600px] flex-col items-center rounded-lg p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <p className=" text-[20px] font-[700] text-white">받고 싶은 가챠를 추가해주세요</p>
              <div className="relative h-[360px] w-[360px]">
                <Image
                  src="/icons/capsule-modal.svg"
                  width={375}
                  height={812}
                  alt="capsule-label"
                  className="cursor-pointer"
                />
                <input
                  type="text"
                  value={가챠}
                  onChange={(e) => set가챠(e.target.value)}
                  className="absolute left-1/2 top-[37.1%] h-[83px] w-[226px] -translate-x-1/2 -translate-y-1/2 transform rounded-[18px] border p-[20px] text-[27px] text-[#5EC7B9] outline-none"
                />
              </div>
              <button className="absolute right-4 top-4 m-2 text-xl text-black" onClick={() => {}}>
                <Image
                  src="/icons/close-modal.svg"
                  width={24}
                  height={24}
                  alt="close modal"
                  className="cursor-pointer"
                />
              </button>
              <div className="pt-[19px]">
                <Button
                  onClick={onSubmit}
                  className="mt-4 h-[60px] w-[343px] rounded-[10px] bg-[#5EC7B9] font-[700] text-[#FFF]"
                >
                  가챠 추가하기
                </Button>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
      <FixedBottomWrapper>
        <Button
          className="h-[60px] w-[343px] rounded-[10px] bg-dndBlue01 px-[16px] font-[700] text-[#fff]"
          onClick={onSubmit}
        >
          감사 가챠 만들기
        </Button>
      </FixedBottomWrapper>
    </div>
  );
};

export default Gacha;
