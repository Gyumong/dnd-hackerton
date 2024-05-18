'use client';
import AddressInput from '@/app/request-form/components/address-input';
import { DndTitleFont } from '@/app/fonts';
import useCurrentPosition from '@/shared/hooks/useCurrentPosition';
import { useRouter } from 'next/navigation';
import Splash from '@/components/ui/Splash';

export default function Home() {
  const { push } = useRouter();
  const { data: currentPosition } = useCurrentPosition();

  const onClick = () => {
    push('/request-form');
  };
  return (
    <main className="h-dvh bg-white">
      <Splash />
    </main>
  );
}
