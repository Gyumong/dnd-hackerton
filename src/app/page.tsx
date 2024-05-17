"use client"
import AddressInput from '@/app/address-input';
import { DndTitleFont } from '@/app/fonts';
import useCurrentPosition from '@/shared/hooks/useCurrentPosition';
import { useRouter } from 'next/navigation';

export default function Home() {

  const {push} = useRouter();
  const { data: currentPosition } = useCurrentPosition();

  const onClick = () => {
    push('/request-form');

  }
  return (
    <main className="h-dvh bg-white">
      <h1 className={DndTitleFont.className}>타이틀</h1>
      <AddressInput/>
      <button onClick={onClick}>가자아</button>
    </main>
  );

}