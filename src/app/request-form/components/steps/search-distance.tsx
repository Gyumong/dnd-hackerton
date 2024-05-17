import { clsx } from 'clsx';
import { DndTitleFont } from '@/app/fonts';
import { useState } from 'react';
import SearchIcon from '/public/icons/search.svg';
import FixedBottomWrapper from '@/shared/@common/fixed-bottom-wrapper';
import Button from '@/shared/@common/Button/Button';

const SearchDistanceStep = () => {

  const [value,setValue] = useState('' )
  return (
    <>
    <div className="flex flex-col mx-4">
      <div className="mb-7" />
      <h1
        className={clsx(DndTitleFont.className, "text-dndBlack01 whitespace-pre-line text-[24px] leading-custom  tracking-tighter1")}>{`이번 만남 장소는\n어디인가요?`}</h1>
      <div className="mb-[135px]" />
      <label className="text-[14px] font-[700]">지방러는 여기서 출발해요</label>
      <div className="relative">
        <input
          placeholder="부산광역시 금정구 부산대학로 63번길 2"
          value={value}
          className={clsx(
            "mt-[8px] inline-flex h-[54px] w-[343px] shrink grow basis-0 items-center justify-start gap-4 rounded-lg border p-4 font-['Pretendard'] text-base font-normal leading-snug text-neutral-800 outline-none",
            value ? "bg-[#F5F7FF]" : "bg-[#F4F4F4]",
          )}
          onChange={(e) => setValue(e.target.value)}
        />
        {SearchIcon && (
          <div className="absolute right-2.5 top-[56%] transform -translate-y-1/2">
            <SearchIcon className="text-muted-foreground" size={24} />
          </div>
        )}
      </div>
      <div className="mb-9"/>
      <label className="text-[14px] font-[700]">서울러를 만나는 곳은 여기에요</label>
      <div className="relative">
        <input
          placeholder="부산광역시 금정구 부산대학로 63번길 2"
          value={value}
          className={clsx(
            "mt-[8px] inline-flex h-[54px] w-[343px] shrink grow basis-0 items-center justify-start gap-4 rounded-lg border p-4 font-['Pretendard'] text-base font-normal leading-snug text-neutral-800 outline-none",
            value ? "bg-[#F5F7FF]" : "bg-[#F4F4F4]",
          )}
          onChange={(e) => setValue(e.target.value)}
        />
        {SearchIcon && (
          <div className="absolute right-2.5 top-[56%] transform -translate-y-1/2">
            <SearchIcon className="text-muted-foreground" size={24} />
          </div>
        )}
      </div>
    </div>
      <FixedBottomWrapper>
        <Button  className={clsx(
          "mx-[16px] h-14 w-[343px] rounded-lg text-center font-['Pretendard'] text-lg font-bold leading-[25.20px]",
          value ? "bg-[#DBDBDB] text-[#B8B8B8]" : "bg-[#6687FC] text-white"
        )}>최적 경로 알아보기</Button>
      </FixedBottomWrapper>
    </>
  )
}

export default SearchDistanceStep;