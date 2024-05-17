"use client"

import Button from '@/shared/@common/Button/Button';
import useCurrentPosition from '@/shared/hooks/useCurrentPosition';

const RequsetFormPage = () => {
  const { data: currentPosition } = useCurrentPosition();
  const latitude = currentPosition?.coords?.latitude ?? 0;
  const longitude = currentPosition?.coords?.longitude ?? 0;

  console.log('latitude', latitude, 'longitude', longitude)

  return (
    <div className="h-dvh bg-white">
      <Button className="mx-[16px] h-14 w-[343px] rounded-lg bg-amber-300 text-center font-['Pretendard'] text-lg font-bold leading-[25.20px] text-white">
        검색
      </Button>
    </div>
  );
};

export default RequsetFormPage;
