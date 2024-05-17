import { clsx } from 'clsx';
import { DndTitleFont } from '@/app/fonts';

const SearchDistanceStep = () => {
  return (
    <div className="flex flex-col mx-4">
      <div className="mb-7"/>
      <h1 className={clsx(DndTitleFont.className,"text-dndBlack01 whitespace-pre-line text-[24px] leading-custom  tracking-tighter1")}>{`이번 만남 장소는\n어디인가요?`}</h1>
    </div>
  )
}

export default SearchDistanceStep;