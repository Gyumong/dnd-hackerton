'use client';

import Button from '@/shared/@common/Button/Button';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import useGetResultQuery from '@/app/request-form/apis/queries/useGetResult';
import { useSearchParams } from 'next/navigation';
import { convertMinutesToHoursAndMinutes } from '@/app/request-form/utils/convertTime';
import FixedBottomWrapper from '@/shared/@common/fixed-bottom-wrapper';
import { useCarousel } from '@/app/request-form/hooks/useCarousel';

interface PropsType {
  transportation: '시내버스' | '지하철' | '시외버스';
}

const Transportation = () => {
  const { setCarouselIndexNext } = useCarousel();
  const step = Number(useSearchParams().get('step'));
  const { data } = useGetResultQuery(step);
  console.log('data', data);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const iconSrc =
      data?.data?.vehicles?.[0] === '시내버스'
        ? '/icons/bus.svg'
        : data?.data?.vehicles?.[0] === '지하철'
          ? '/icons/subway.svg'
          : '/icons/intercity_bus.svg';

    setImageUrl(iconSrc);
  }, [data]);

  const onClick = () => {
    setCarouselIndexNext();
  };
  return (
    <>
      <div className="w-full bg-white">
        <div className="px-[16px] pt-[28px] text-[24px] font-[700]">
          지방러님의
          <br /> 여정을 계산해보았어요!
        </div>
        <p className="px-[100px] pt-[40px] text-center text-[20px] font-[700]">
          선택하신 교통수단은
          <br />
          <span className="text-dndBlue01">
            {data?.data?.vehicles?.[0]}, {data?.data?.vehicles?.[1]}
          </span>
          에요
        </p>
        <div className="flex justify-center">
          {imageUrl && (
            <Image
              src={imageUrl}
              width={214}
              height={214}
              alt={data?.data?.vehicles?.[0]}
              className="pt-[12px]"
            />
          )}
        </div>
        <div className="flex justify-center pt-[24px]">
          <Image src="/icons/hyphen.svg" width={24} height={0} alt="hyphen" />
        </div>
        <p className="flex flex-col items-center gap-[5px] pt-[20px] text-[20px] font-[700]">
          <span className="flex justify-center">
            <span className="text-dndBlue01">{data?.data?.endName}</span>에 도착하기까지
          </span>
          <span className="flex justify-center">
            편도 &nbsp;
            <span className="text-dndBlue01">
              {convertMinutesToHoursAndMinutes(data?.data?.totalMinutes)}
            </span>
          </span>
          <span className="flex justify-center">
            교통비 &nbsp; <span className="text-dndBlue01">{data?.data?.totalPayment}원</span>이
            소비돼요!
          </span>
        </p>
        <div className="flex justify-center pb-[23px] pt-[56px]"></div>
      </div>
      <FixedBottomWrapper>
        <Button
          className="h-[60px] w-[343px] rounded-[10px] bg-dndBlue01 px-[16px] font-[700] text-[#fff]"
          onClick={onClick}
        >
          감사 가챠 만들기
        </Button>
      </FixedBottomWrapper>
    </>
  );
};

export default Transportation;
