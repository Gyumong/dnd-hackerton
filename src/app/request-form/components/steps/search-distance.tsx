import { clsx } from 'clsx';
import { DndTitleFont } from '@/app/fonts';
import { useState } from 'react';
import SearchIcon from '/public/icons/search.svg';
import FixedBottomWrapper from '@/shared/@common/fixed-bottom-wrapper';
import Button from '@/shared/@common/Button/Button';
import AddressInput from '@/app/request-form/components/address-input';
import EndAddressInput from '@/app/request-form/components/end-address-input';
import { useAtom, atom } from 'jotai';
import useGeocode from '@/shared/hooks/useGeoCode';

export const addressAtom = atom({
  startAddress: '',
  lastAddress: '',
});

const SearchDistanceStep = () => {
  const [address] = useAtom(addressAtom);

  console.log('address', address);
  const startAddressResult = useGeocode(address.startAddress);
  const endAddressResult = useGeocode(address.lastAddress);

  const onSubmit = () => {
    console.log('startAddressResult', startAddressResult.data);
    console.log('endAddressResult', endAddressResult.data);
  };
  return (
    <>
      <div className="mx-4 flex flex-col">
        <div className="mb-7" />
        <h1
          className={clsx(
            DndTitleFont.className,
            'whitespace-pre-line text-[24px] leading-custom tracking-tighter1  text-dndBlack01',
          )}
        >{`이번 만남 장소는\n어디인가요?`}</h1>
        <div className="mb-[135px]" />
        <AddressInput />
        <div className="mb-9" />
        <EndAddressInput />
      </div>
      <FixedBottomWrapper>
        <Button
          className={clsx(
            "mx-[16px] h-14 w-[343px] rounded-lg text-center font-['Pretendard'] text-lg font-bold leading-[25.20px]",
            address?.startAddress && address?.lastAddress
              ? 'bg-[#6687FC] text-white'
              : 'bg-[#DBDBDB] text-[#B8B8B8]',
          )}
          onClick={onSubmit}
        >
          최적 경로 알아보기
        </Button>
      </FixedBottomWrapper>
    </>
  );
};

export default SearchDistanceStep;
