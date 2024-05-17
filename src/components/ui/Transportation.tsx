import Button from '@/shared/@common/Button/Button';
import Image from 'next/image';

interface PropsType {
  transportation: 'bus' | 'subway';
}

const Transportation = (props: PropsType) => {
  const { transportation } = props;

  return (
    <section className=" bg-white">
      <div className="px-[16px] pt-[28px] text-[24px] font-[700]">
        지방러님의
        <br /> 여정을 계산해보았어요!
      </div>
      <p className="px-[106px] pt-[80px] text-center text-[20px] font-[700]">
        선택하신 교통수단은
        <br />
        <span className="text-dndBlue01">시외버스</span>
        에요
      </p>
      <div className="flex justify-center">
        <Image
          src={transportation === 'bus' ? '/icons/bus.svg' : '/icons/subway.svg'}
          width={214}
          height={214}
          alt="bus"
          className="pt-[12px]"
        />
      </div>
      <div className="flex justify-center pt-[48px]">
        <Image src="/icons/hyphen.svg" width={24} height={0} alt="hyphen" />
      </div>
      <p className="flex flex-col items-center gap-[5px] pt-[20px] text-[20px] font-[700]">
        <p className="flex justify-center ">
          <span className="text-dndBlue01">홍대입구역</span>에 도착하기까지
        </p>
        <p className="flex justify-center ">
          편도 &nbsp;
          <span className="text-dndBlue01">2시간 40분</span>
        </p>
        <p className="flex justify-center ">
          교통비 &nbsp; <span className="text-dndBlue01">26,000원</span>이 소비돼요!
        </p>
      </p>
      <div className="flex justify-center pb-[23px] pt-[56px]">
        <Button className="h-[60px] w-[343px] rounded-[10px] bg-dndBlue01 px-[16px]  font-[700] text-[#fff]">
          감사 가챠 만들기
        </Button>
      </div>
    </section>
  );
};

export default Transportation;
