import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { clsx } from 'clsx';
import SearchIcon from '/public/icons/search.svg';
import { useAtom } from 'jotai';

import { addressAtom } from '@/app/request-form/components/steps/search-distance';

const AddressInput = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useAtom(addressAtom);
  const themeObj = {
    bgColor: '#FFFFFF',
    pageBgColor: '#FFFFFF',
    postcodeTextColor: '#C05850',
    emphTextColor: '#222222',
  };

  const completeHandler = (data: any) => {
    const { address } = data;
    setAddress((v) => {
      return { ...v, startAddress: address };
    });
    setIsOpen(false);
  };

  const closeHandler = (state: any) => {
    if (state === 'FORCE_CLOSE') {
      setIsOpen(false);
    } else if (state === 'COMPLETE_CLOSE') {
      setIsOpen(false);
    }
  };

  const toggleHandler = () => {
    setIsOpen((prevOpenState) => !prevOpenState);
  };

  return (
    <div>
      <Drawer open={isOpen}>
        <DrawerTrigger onClick={toggleHandler}>
          <div className="flex flex-col items-start">
            <label className="text-[14px] font-[700]">지방러는 여기서 출발해요</label>
            <div className="relative">
              <input
                placeholder="출발지 입력하기"
                value={address.startAddress}
                className={clsx(
                  "mt-[8px] inline-flex h-[54px] w-[343px] shrink grow basis-0 items-center justify-start gap-4 rounded-lg border p-4 font-['Pretendard'] text-base font-normal leading-snug text-neutral-800 outline-none",
                  address.startAddress ? 'bg-[#F5F7FF]' : 'bg-[#F4F4F4]',
                )}
                onChange={(e) =>
                  setAddress((address) => {
                    return { ...address, startAddress: e.target.value };
                  })
                }
              />
              {SearchIcon && (
                <div className="absolute right-2.5 top-[56%] -translate-y-1/2 transform">
                  <SearchIcon className="text-muted-foreground" size={24} />
                </div>
              )}
            </div>
          </div>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>주소 찾기</DrawerTitle>
          </DrawerHeader>
          <div>
            <DaumPostcode
              theme={themeObj}
              className="h-[480px] w-[360px]"
              onComplete={completeHandler}
              // onClose={closeHandler}
            />
          </div>
        </DrawerContent>
      </Drawer>
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default AddressInput;
