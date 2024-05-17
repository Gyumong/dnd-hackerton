"use client"
import AddressInput from '@/app/address-input';

export default function Home() {
  const themeObj = {
    postcodeTextColor: "#FA7142",
    emphTextColor: "#333333",
  };
  return (
    <main className="h-dvh bg-white">
      <AddressInput/>
    </main>
  );

}