import Image from 'next/image';

const AddGachaLoadingPage = () => {
  return (
    <div className="relative flex flex-col items-center">
      <p className="px-[60px] pt-[80px] text-[20px] font-[700] text-[#202020]">
        감사 가챠를 등록하는 중이에요!
      </p>
      <div className="relative pt-[48px]">
        <Image
          src="/icons/mini-gacha.svg"
          width={290}
          height={487}
          alt="mini-gacha"
          className="z-10"
        />
        <Image
          src="/icons/red.gif"
          width={120}
          height={120}
          alt="red-gif-1"
          className="absolute"
          style={{ top: '37%', left: '10%' }}
        />
        <Image
          src="/icons/green.gif"
          width={120}
          height={120}
          alt="red-gif-2"
          className="absolute"
          style={{ top: '37%', left: '50%' }}
        />
        <Image
          src="/icons/yellow.gif"
          width={120}
          height={120}
          alt="red-gif-3"
          className="absolute"
          style={{ top: '21%', left: '28%' }}
        />
      </div>
    </div>
  );
};

export default AddGachaLoadingPage;
