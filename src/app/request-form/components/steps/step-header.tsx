'use client';

import { motion } from 'framer-motion';

import { useSearchParams } from 'next/navigation';
export default function StepHeader() {
  const step = Number(useSearchParams().get('step'));
  const WidthClassByStep = {
    0: 'w-1/7',
    1: 'w-2/7',
    2: 'w-3/7',
    3: 'w-4/7',
    4: 'w-5/7',
    5: 'w-6/7',
    6: 'w-full',
  };
  return (
    <div className="relative h-[4px] w-full bg-[#D9D9D9]">
      <motion.div
        layout
        className={`absolute left-0 top-0 h-full bg-dndBlue01 ${WidthClassByStep[step]}`}
      ></motion.div>
    </div>
  );
}
