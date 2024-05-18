import Image from 'next/image';

const Splash = () => {
  return (
    <div className="flex h-dvh justify-center bg-[#6687FC]">
      <div className="h-[200px] pt-[250px]">
        <Image src="/icons/splash_final.gif" width={200} height={200} alt="splash" />
      </div>
    </div>
  );
};

export default Splash;
