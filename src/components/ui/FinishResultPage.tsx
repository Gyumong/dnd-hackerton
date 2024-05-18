import Image from 'next/image';
import { Button } from './button';

const FinishResultPage = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/icons/mini-gacha2.svg"
        width={208}
        height={208}
        alt="mini"
        className="pb-[4px] pt-[108px]"
      />
      <p className="text-[20px] font-[700]">
        가챠를 공유할 준비가
        <br /> 모두 끝났어요!
      </p>
      <div className="flex justify-center pb-[21px]">
        <Button className="fixed bottom-[31px] left-0 right-0 mx-auto h-[60px] w-[343px] rounded-[10px] bg-[#6687FC] font-[700] text-[#fff]">
          가챠 공유하기
        </Button>
      </div>
    </div>
  );
};

export default FinishResultPage;
