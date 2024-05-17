import { DndTitleFont } from '@/app/fonts';
import clsx from 'clsx';
import BreadCrumb from '../../../../components/ui/Breadcrumb';
import { Button } from '../../../../components/ui/button';
import FixedBottomWrapper from '@/shared/@common/fixed-bottom-wrapper';
import useGetDestinationQuery from '@/app/request-form/apis/queries/useDestinationQuery';
import { useSearchParams } from 'next/navigation';
import { useAtom } from 'jotai/index';
import { addressAtom } from '@/app/request-form/components/steps/search-distance';
import { convertMinutesToHoursAndMinutes } from '@/app/request-form/utils/convertTime';
import useSelectDestinationMutation from '@/app/request-form/apis/mutations/useSelectDestinationMutation';
import { useState } from 'react';
import { useCarousel } from '@/app/request-form/hooks/useCarousel';

const DistanceResult = () => {
  const step = Number(useSearchParams().get('step'));
  const { data } = useGetDestinationQuery(step);
  const { setCarouselIndexNext } = useCarousel();
  const { mutateAsync } = useSelectDestinationMutation();
  const [address] = useAtom(addressAtom);
  const [selectedDestinationIndex, setSelectedDestinationIndex] = useState(null);
  const [aa, setAA] = useState<any>(null);
  // div를 클릭했을 때 실행될 함수입니다.

  console.log('address', address);

  const onClickCard = (d: any, index: any) => {
    console.log('d', d);
    setSelectedDestinationIndex(index);
    setAA(d);
  };
  const onSubmit = async () => {
    // @ts-ignore
    const data = await mutateAsync({
      vehicles: aa?.vehicles,
      totalMinutes: aa?.totalMinutes,
      totalPayment: aa?.totalPayment,
      transitCount: aa?.transitCount,
      firstStartStation: aa?.firstStartStation,
      lastEndStation: aa?.lastEndStation,
      totalDistance: aa?.totalDistance,
    });

    if (data?.success) {
      setCarouselIndexNext();
    }
  };
  return (
    <>
      <div className="overflow-scroll px-4">
        <h1
          className={clsx(
            DndTitleFont.className,
            'whitespace-pre-line pb-[24px] pt-[28px] text-[24px]  leading-custom tracking-tighter1 text-dndBlack01',
          )}
        >{`이번 만남 장소는\n어디인가요?`}</h1>
        <div className="pb-[16px]">
          <label className="text-[14px] font-[700]">출발지</label>
          <input
            defaultValue={address?.startAddress}
            disabled={true}
            className="mt-[8px] inline-flex h-[54px] w-[343px] shrink grow basis-0 items-center justify-start gap-4 rounded-lg border bg-[#F5F7FF] p-4 font-['Pretendard'] text-base font-normal leading-snug text-neutral-800 outline-none "
          />
        </div>
        <label className="text-[14px] font-[700]">도착지</label>
        <input
          defaultValue={address?.lastAddress}
          disabled={true}
          className="mt-[8px] inline-flex h-[54px] w-[343px] shrink grow basis-0 items-center justify-start gap-4 rounded-lg border bg-[#F5F7FF] p-4 font-['Pretendard'] text-base font-normal leading-snug text-neutral-800 outline-none "
        />
        <article className="flex flex-col gap-[8px] pt-[37px]">
          {data?.destinations.map((destination, i) => {
            return (
              <div
                className={clsx(
                  'h-[150px] rounded-[10px] border border-[#E8E8E8] px-[20px] pt-[24px]',
                  { 'bg-[#D0DAFE]': selectedDestinationIndex === i }, // 선택된 목적지에만 특정 배경색 적용
                )}
                onClick={() => onClickCard(destination, i)}
              >
                {i === 0 && <p className="text-[14px] font-[700] text-dndBlue01">최적 👍</p>}
                <div className="flex justify-between pt-[6px] text-[24px] font-[700] text-[#202020]">
                  <strong>{convertMinutesToHoursAndMinutes(destination?.totalMinutes)}</strong>
                  <strong>
                    {destination?.totalPayment}
                    <span className="text-[16px]">원</span>
                  </strong>
                </div>
                <div className="flex justify-between pt-[6px] text-[24px] font-[700] text-[#202020]">
                  <div className="flex gap-[10px]">
                    {destination?.vehicles.map((vehicle, i) => {
                      return <BreadCrumb key={i} transportation={vehicle} />;
                    })}
                  </div>
                  <span className="text-[14px] font-[500] text-[#A8A8A8]">
                    환승 {destination?.transitCount}회
                  </span>
                </div>
              </div>
            );
          })}
        </article>
      </div>
      <FixedBottomWrapper>
        <Button
          className={clsx(
            "mx-[16px] h-14 w-[343px] rounded-lg text-center font-['Pretendard'] text-lg font-bold leading-[25.20px]",
            aa !== null ? 'bg-[#6687FC] text-white' : 'bg-[#DBDBDB] text-[#B8B8B8]',
          )}
          disabled={aa === null}
          onClick={onSubmit}
        >
          여정 계산하기
        </Button>
      </FixedBottomWrapper>
    </>
  );
};

export default DistanceResult;
