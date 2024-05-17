import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

const AddressInput = (props:any) => {
  const [zodecode, setZonecode] = useState('');
  const [address, setAddress] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [detailedAddress, setDetailedAddress] = useState('');

  const themeObj = {
    bgColor: '#FFFFFF',
    pageBgColor: '#FFFFFF',
    postcodeTextColor: '#C05850',
    emphTextColor: '#222222',
  };

  const postCodeStyle = {
    width: '360px',
    height: '480px',
  };

  const completeHandler = (data:any) => {
    const { address, zonecode } = data;
    setZonecode(zonecode);
    setAddress(address);
    setIsOpen(false);
  };

  const closeHandler = (state:any) => {
    if (state === 'FORCE_CLOSE') {
      setIsOpen(false);
    } else if (state === 'COMPLETE_CLOSE') {
      setIsOpen(false);
    }
  };

  const toggleHandler = () => {
    setIsOpen((prevOpenState) => !prevOpenState);
  };

  const inputChangeHandler = (event:any) => {
    setDetailedAddress(event.target.value);
  };

  return (
    <div>
      <Drawer open={isOpen}>
        <DrawerTrigger onClick={toggleHandler}>Open</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>주소 찾기</DrawerTitle>
          </DrawerHeader>
          <div>
            <DaumPostcode
              theme={themeObj}
              className="w-[360px] h-[480px]"
              onComplete={completeHandler}
              // onClose={closeHandler}
            />
          </div>
        </DrawerContent>
      </Drawer>
      <div>
        <div>
        </div>
        <div>{address}</div>
        {/*<input value={detailedAddress} onChange={inputChangeHandler} />*/}
      </div>
    </div>
  );
};

export default AddressInput;