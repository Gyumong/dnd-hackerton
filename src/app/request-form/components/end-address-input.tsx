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
const EndAddressInput = (props: any) => {
  const [address, setAddress] = useAtom(addressAtom);
  const [isOpen, setIsOpen] = useState(false);

  const themeObj = {
    bgColor: '#FFFFFF',
    pageBgColor: '#FFFFFF',
    postcodeTextColor: '#C05850',
    emphTextColor: '#222222',
  };

  const completeHandler = (data: any) => {
    const { address, zonecode } = data;
    setAddress((v) => {
      return { ...v, lastAddress: address };
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
            <label className="text-[14px] font-[700]">서울러를 만나는 곳은 여기에요</label>
            <div className="relative">
              <input
                placeholder="도착지 입력하기"
                value={address.lastAddress}
                className={clsx(
                  "mt-[8px] inline-flex h-[54px] w-[343px] shrink grow basis-0 items-center justify-start gap-4 rounded-lg border p-4 font-['Pretendard'] text-base font-normal leading-snug text-neutral-800 outline-none",
                  address.lastAddress ? 'bg-[#F5F7FF]' : 'bg-[#F4F4F4]',
                )}
                onChange={(e) =>
                  setAddress((address) => {
                    return { ...address, lastAddress: e.target.value };
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

export default EndAddressInput;
