"use client"
import AddressInput from '@/app/address-input';
import { DndTitleFont } from '@/app/fonts';

export default function Home() {
  const themeObj = {
    postcodeTextColor: "#FA7142",
    emphTextColor: "#333333",
  };
  return (
    <main className="h-dvh bg-white">
      <h1 className={DndTitleFont.className}>타이틀</h1>
      <AddressInput/>
    </main>
  );

}