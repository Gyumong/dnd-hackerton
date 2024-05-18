'use client';

import { useEffect, useState } from 'react';
import { Button } from './button';

interface PropsType {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

// Props로 받도록 수정하시면 될 것 같습니다

const MessageModal = () => {
  // const { setShowModal } = props;
  const [showModal, setShowModal] = useState(false);

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
        className="relative flex h-[214px] w-[343px] flex-col items-center rounded-[20px] bg-[#fff] p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="font-[700] text-[#6687FC]">🎊 지방러 친구가 남긴 한마디 ✍️</p>
        <p className="pt-[36px] text-[24px] font-[700] text-[#202020]">
          먼 길 올라가는데, <br />
          교통비 n빵 어떰?
        </p>
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

export default MessageModal;
