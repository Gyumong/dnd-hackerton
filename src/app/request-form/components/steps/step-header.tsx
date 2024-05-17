'use client';

import { motion } from 'framer-motion';

import { useSearchParams } from 'next/navigation';
export default function StepHeader() {
  const step = Number(useSearchParams().get('step'));
  const WidthClassByStep = {
    0: 'w-1/4',
    1: 'w-2/4',
    2: 'w-3/4',
    3: 'w-full',
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
