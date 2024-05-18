import Image from 'next/image';
import { Button } from '../../../../components/ui/button';
import FixedBottomWrapper from '@/shared/@common/fixed-bottom-wrapper';
import clsx from 'clsx';
import { copyURL } from '@/app/request-form/utils/copyURL';
import { useToast } from '@/components/ui/use-toast';

const FinishResultPage = () => {
  const { toast } = useToast();
  const onCLick = () => {
    console.log('click');
    copyURL({
      title: '가챠 공유하기',
      url: `http://localhost:3000/seoul`,
      onCompleted: () => {
        toast({
          title: '공유하기',
          description: '링크를 복사했어요.',
        });
      },
      onError: () => {
        toast({
          title: '링크 공유에 실패했어요',
          description: '링크 공유에 실패했어요',
        });
      },
    });
  };
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/icons/mini-gacha2.svg"
        width={208}
        height={208}
        alt="mini"
        className="pb-[4px] pt-[108px]"
      />
      <p className="text-center text-[20px] font-[700]">
        가챠를 공유할 준비가
        <br /> 모두 끝났어요!
      </p>
      <FixedBottomWrapper>
        <Button
          className={clsx(
            "mx-[16px] h-14 w-[343px] rounded-lg text-center font-['Pretendard'] text-lg font-bold leading-[25.20px]",
            true !== null ? 'bg-[#6687FC] text-white' : 'bg-[#DBDBDB] text-[#B8B8B8]',
          )}
          disabled={false}
          onClick={onCLick}
        >
          가챠 공유하기
        </Button>
      </FixedBottomWrapper>
    </div>
  );
};

export default FinishResultPage;
