'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { Button } from './button';

interface PropsType {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddCapsuleModal = (props: PropsType) => {
  const { setShowModal } = props;
  const handleClose = () => {
    setShowModal(false);
  };
  const handleAddCapsule = () => {
    setShowModal(false);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [setShowModal]);

  return (
    <div
      className="fixed inset-0 z-50 flex w-full items-center justify-center bg-neutral-800 bg-opacity-80"
      onClick={handleClose}
    >
      <div
        className="relative flex h-full w-[90%] max-w-[600px] flex-col items-center rounded-lg p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="pb-[42px] pt-[72px] text-[20px] font-[700] text-white">
          받고 싶은 가챠를 추가해주세요
        </p>
        <div className="relative h-[360px] w-[360px]">
          <Image
            src="/icons/capsule-modal.svg"
            width={375}
            height={812}
            alt="capsule-label"
            className="cursor-pointer"
          />
          <input
            type="text"
            className="absolute left-1/2 top-[37.1%] h-[83px] w-[226px] -translate-x-1/2 -translate-y-1/2 transform rounded-[18px] border p-[20px] text-[27px] text-[#5EC7B9] outline-none"
          />
        </div>
        <button className="absolute right-4 top-4 m-2 text-xl text-black" onClick={handleClose}>
          <Image
            src="/icons/close-modal.svg"
            width={24}
            height={24}
            alt="close modal"
            className="cursor-pointer"
          />
        </button>
        <div className="pt-[19px]">
          <Button
            onClick={handleAddCapsule}
            className="mt-4 h-[60px] w-[343px] rounded-[10px] bg-[#5EC7B9] font-[700] text-[#FFF]"
          >
            가챠 추가하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddCapsuleModal;
