import { DndTitleFont } from '@/app/fonts';
import clsx from 'clsx';
import BreadCrumb from './Breadcrumb';
import { Button } from './button';

const DistanceResult = () => {
  return (
    <div className=" bg-white px-[16px]">
      <h1
        className={clsx(
          DndTitleFont.className,
          'whitespace-pre-line pb-[24px] pt-[28px] text-[24px]  leading-custom tracking-tighter1 text-dndBlack01',
        )}
      >{`이번 만남 장소는\n어디인가요?`}</h1>
      <div className="pb-[16px]">
        <label className="text-[14px] font-[700]">출발지</label>
        <input
          placeholder="부산광역시 금정구 부산대학로 63번길 2"
          className="mt-[8px] inline-flex h-[54px] w-[343px] shrink grow basis-0 items-center justify-start gap-4 rounded-lg border bg-[#F5F7FF] p-4 font-['Pretendard'] text-base font-normal leading-snug text-neutral-800 outline-none "
        />
      </div>
      <label className="text-[14px] font-[700]">도착지</label>
      <input
        placeholder="부산광역시 금정구 부산대학로 63번길 2"
        className="mt-[8px] inline-flex h-[54px] w-[343px] shrink grow basis-0 items-center justify-start gap-4 rounded-lg border bg-[#F5F7FF] p-4 font-['Pretendard'] text-base font-normal leading-snug text-neutral-800 outline-none "
      />
      <article className="flex flex-col gap-[8px] pt-[37px]">
        {/** Card1 */}
        <div className="h-[150px] rounded-[10px] border border-[#E8E8E8] px-[20px] pt-[24px]">
          <p className="text-[14px] font-[700] text-dndBlue01">최적 👍</p>
          <div className="flex justify-between pt-[6px] text-[24px] font-[700] text-[#202020]">
            <strong>3시간 40분</strong>
            <strong>
              53,200<span className="text-[16px]">원</span>
            </strong>
          </div>
          <div className="flex justify-between pt-[6px] text-[24px] font-[700] text-[#202020]">
            <BreadCrumb transportation="지하철" />
            <span className="text-[14px] font-[500] text-[#A8A8A8]">환승 3회</span>
          </div>
        </div>

        {/** Card2 */}
        <div className="h-[150px] rounded-[10px] border border-[#E8E8E8] px-[20px] pt-[24px]">
          <p className="text-[14px] font-[700] text-dndBlue01">최적 👍</p>
          <div className="flex justify-between pt-[6px] text-[24px] font-[700] text-[#202020]">
            <strong>4시간 32분</strong>
            <strong>
              46,300<span className="text-[16px]">원</span>
            </strong>
          </div>
          <div className="flex justify-between pt-[6px] text-[24px] font-[700] text-[#202020]">
            <BreadCrumb transportation="시내버스" />
            <span className="text-[14px] font-[500] text-[#A8A8A8]">환승 2회</span>
          </div>
        </div>
      </article>
      <div className="flex justify-center pb-[21px] pt-[37px]">
        <Button className="h-[60px] w-[343px] rounded-[10px] bg-[#DBDBDB] font-[700] text-[#B8B8B8]">
          여정 계산하기
        </Button>
      </div>
    </div>
  );
};

export default DistanceResult;
