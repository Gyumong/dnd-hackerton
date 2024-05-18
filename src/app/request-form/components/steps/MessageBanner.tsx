'use client';

import { DndTitleFont } from '@/app/fonts';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import TextBox from '../../../../components/ui/TextBox';
import { Button } from '../../../../components/ui/button';
import FixedBottomWrapper from '@/shared/@common/fixed-bottom-wrapper';
import useFinalGotcha from '@/app/request-form/apis/mutations/useFinalResult';
import { useCarousel } from '@/app/request-form/hooks/useCarousel';

const MessageBanner = () => {
  const [inputText, setInputText] = useState('');
  const [selectedTextBox, setSelectedTextBox] = useState<string | null>(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isFirstSave, setIsFirstSave] = useState(false);
  const { mutateAsync } = useFinalGotcha();
  const { setCarouselIndexNext } = useCarousel();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleInputFocus = () => {
    setSelectedTextBox(null);
  };

  const handleTextBoxClick = (text: string) => {
    setSelectedTextBox(text);
    setInputText('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputText.trim() !== '') {
      console.log(inputText);
      setIsDisabled(true);
      setIsFirstSave(true);
    }
  };

  const isButtonDisabled = !selectedTextBox && inputText.trim() === '';
  const onSubmit = async () => {
    await mutateAsync({
      statementId: 3,
      customStatement: null,
    });
    setCarouselIndexNext();
  };
  return (
    <>
      <h1
        className={clsx(
          DndTitleFont.className,
          'whitespace-pre-line pb-[24px] pl-[16px] pt-[28px] text-[24px] leading-custom tracking-tighter1 text-dndBlack01',
        )}
      >
        서울러 친구에게 전달하기 전, <br />
        <span className="text-dndBlue01">지방러 한마디</span>를 남겨볼까요?
      </h1>

      {/** 메시지 리스트 */}
      <article className="flex flex-col gap-[8px] px-[16px]">
        {[
          '‘영화 티켓 반띵’으로 좀 더 행복하게 서울 갈지도?',
          '‘서울가는데, 디저트는 사주면 안 잡아 먹짘ㅋㅋ',
          '먼 길 올라가는데, 교통비 n빵 어떰?',
          '서울의 점심 값은 내가, 저녁 값은 네가!',
        ].map((text, index) => (
          <TextBox
            key={index}
            text={text}
            onClick={() => handleTextBoxClick(text)}
            className={
              selectedTextBox === text
                ? 'border-2 border-[#D0DAFE] bg-[#F5F7FF] text-[#6687FC]'
                : 'border-[#E8E8E8] text-[#A8A8A8]'
            }
          />
        ))}
        <div
          className={`flex h-[64px] w-[343px] justify-between rounded-[10px] border px-[16px] py-[20px] ${selectedTextBox ? 'border-[#E8E8E8]' : 'border-[#D0DAFE]'}`}
        >
          <Image
            src={selectedTextBox ? '/icons/plus2.svg' : '/icons/plus.svg'}
            width={20}
            height={20}
            alt="plus"
          />
          <input
            className={`ml-[9.17px] w-full bg-white text-[#6687FC] outline-none ${selectedTextBox ? 'placeholder-[#A8A8A8]' : 'placeholder-[#6687FC]'}`}
            placeholder="메시지 직접 작성하기"
            maxLength={20}
            value={inputText}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onKeyDown={handleKeyDown}
            disabled={isDisabled}
            style={{
              borderColor: inputText ? '#D0DAFE' : '#E8E8E8',
            }}
          />
          {isDisabled && isFirstSave && (
            <Image
              src="/icons/write.svg"
              width={20}
              height={20}
              alt="write"
              onClick={() => setIsDisabled((isDisabled) => !isDisabled)}
            />
          )}
        </div>
      </article>
      <FixedBottomWrapper>
        <Button
          className={clsx(
            "mx-[16px] h-14 w-[343px] rounded-lg text-center font-['Pretendard'] text-lg font-bold leading-[25.20px]",
            true !== null ? 'bg-[#6687FC] text-white' : 'bg-[#DBDBDB] text-[#B8B8B8]',
          )}
          disabled={false}
          onClick={onSubmit}
        >
          여정 계산하기
        </Button>
      </FixedBottomWrapper>
    </>
  );
};

export default MessageBanner;
