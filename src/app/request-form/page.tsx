"use client"

import Button from '@/shared/@common/Button/Button';
import useCurrentPosition from '@/shared/hooks/useCurrentPosition';
import useGeocode from '@/shared/hooks/useGeoCode';
import SearchDistanceStep from '@/app/request-form/components/steps/search-distance';

const RequsetFormPage = () => {
  const { data: currentPosition } = useCurrentPosition();
  const latitude = currentPosition?.coords?.latitude ?? 0;
  const longitude = currentPosition?.coords?.longitude ?? 0;

  const {data} = useGeocode('경기 성남시 분당구 판교역로 4')
  console.log('latitude', latitude, 'longitude', longitude,data)

  return (
    <div className="h-dvh bg-white">
      <SearchDistanceStep/>

    </div>
  );
};

export default RequsetFormPage;
