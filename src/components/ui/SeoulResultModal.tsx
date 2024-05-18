'use client';

import { useEffect } from 'react';
import { Button } from './button';

interface PropsType {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SeoulResultModal = (props: PropsType) => {
  const { setShowModal } = props;

  const handleClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-800 bg-opacity-80"
      onClick={handleClose}
    >
      <div
        className="relative flex h-[214px] w-[343px] flex-col items-center rounded-[20px] bg-[#FEEFDD] p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="font-[700] text-[#FC9A7B]">🎊 가챠 결과 🎊</p>
        <p className="pt-[52px] text-[24px] font-[700] text-[#202020]">영화 티켓 반띵</p>
        <button className="absolute right-4 top-4 m-2 text-xl text-black" onClick={handleClose}>
          ✕
        </button>
        <div className="fixed bottom-[31px] left-0 right-0 mx-auto flex justify-center">
          <Button
            onClick={handleClose}
            className="h-[60px] w-[343px] rounded-[10px] bg-[#6687FC] font-[700] text-[#fff]"
          >
            확인
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SeoulResultModal;
