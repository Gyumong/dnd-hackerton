'use client';

import { useEffect, useState } from 'react';

const BreadCrumb = ({ transportation }: { transportation: string }) => {
  const [bgColor, setBgColor] = useState('#E5EBFF');
  const [textColor, setTextColor] = useState('#6687FC');

  useEffect(() => {
    switch (transportation) {
      case '버스':
        setBgColor('#FFDDC1');
        setTextColor('#FF5733');
        break;
      case '시내버스':
        setBgColor('#FDF2D5');
        setTextColor('#F3C64F');
        break;
      case '지하철':
        setBgColor('#E5EBFF');
        setTextColor('#6687FC');
        break;
      case '비행기':
        setBgColor('#FFF4CC');
        setTextColor('#FFC107');
        break;
      default:
        setBgColor('#E5EBFF');
        setTextColor('#6687FC');
        break;
    }
  }, [transportation]);

  return (
    <div
      className="rounded-[8px] px-[8px] py-[4px] text-[14px] font-[700]"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {transportation}
    </div>
  );
};

export default BreadCrumb;
