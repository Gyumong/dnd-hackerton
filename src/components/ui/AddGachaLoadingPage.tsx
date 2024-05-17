import Image from 'next/image';

const AddGachaLoadingPage = () => {
  return (
    <div className="flex flex-col items-center">
      <p className=" px-[60px] pt-[80px] text-[20px] font-[700] text-[#202020]">
        감사 가챠를 등록하는 중이에요!
      </p>
      <Image
        src="/icons/mini-gacha.svg"
        width={290}
        height={487}
        alt="mini-gacha"
        className="pt-[48px]"
      />
    </div>
  );
};

export default AddGachaLoadingPage;
