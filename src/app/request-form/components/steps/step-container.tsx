'use client';
import { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import CarouselContainer from '@/app/request-form/carousel-container';
import SearchDistance from '@/app/request-form/components/steps/search-distance';
import { Steps } from '@/app/request-form/types/steps';
import DistanceResult from '@/app/request-form/components/steps/DistanceResult';
import { Carousel, CarouselApi, CarouselContent } from '@/components/ui/carousel';
import StepHeader from '@/app/request-form/components/steps/step-header';
import Transportation from '@/app/request-form/components/steps/Transportation';
import Gacha from '@/app/request-form/components/steps/Gacha';
import AddGachaLoadingPage from '@/app/request-form/components/steps/AddGachaLoadingPage';
import MessageBanner from '@/app/request-form/components/steps/MessageBanner';
import FinishResultPage from '@/app/request-form/components/steps/FinishResultPage';

interface CarouselDispatch {
  setCarouselIndexPrev: () => void;
  setCarouselIndexNext: () => void;
}

export const CarouselDispatchContext = createContext<CarouselDispatch | undefined>(undefined);

const STEPS = [
  <SearchDistance key={Steps.SEARCH_DISTANCE} />,
  <DistanceResult key={Steps.DISTANCE_RESULT} />,
  <Transportation key={Steps.TRANSPORTATION} />,
  <Gacha key={Steps.GACHA} />,
  <AddGachaLoadingPage key={Steps.ADD_GACHA_LOADING_PAGE} />,
  <MessageBanner key={Steps.MESSAGE_BANNER} />,
  <FinishResultPage key={Steps.FINISH_RESULT_PAGE} />,
] as const;

export default function StepContainer() {
  const [api, setApi] = useState<CarouselApi>();
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setCarouselIndexPrev = useCallback(() => {
    if (api?.selectedScrollSnap() === 0) {
      push('/');
      return;
    }
    api?.scrollPrev();
  }, [push, api]);

  const setCarouselIndexNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const memoizedCarouselDispatch = useMemo(
    () => ({
      setCarouselIndexPrev,
      setCarouselIndexNext,
    }),
    [setCarouselIndexPrev, setCarouselIndexNext],
  );

  useEffect(() => {
    if (!api) return;

    api.on('select', () => {
      push(pathname + `?step=${api.selectedScrollSnap()}`);
    });

    const step = searchParams.get('step') ? Number(searchParams.get('step')) : 0;

    if (step > api.selectedScrollSnap()) {
      // 앞선 과정을 뛰어넘는 것을 방지(ex. 새로고침)
      if (step === 0) {
        api.scrollTo(0, true);
        return;
      }
      push(pathname + `?step=${api.selectedScrollSnap()}`);
    }
    // 브라우저 뒤로가기 처리
    if (step < api.selectedScrollSnap()) {
      api.scrollTo(step, true);
    }
  }, [api?.selectedScrollSnap, push, pathname, searchParams, api]);

  return (
    <CarouselDispatchContext.Provider value={memoizedCarouselDispatch}>
      <Carousel
        setApi={setApi}
        opts={{
          watchDrag: false,
          dragFree: true,
        }}
        className="w-full"
      >
        <StepHeader />
        <CarouselContent className="m-0 h-dvh w-full p-0">
          {STEPS.map((step, idx) => (
            <CarouselContainer key={idx}>{step}</CarouselContainer>
          ))}
        </CarouselContent>
      </Carousel>
    </CarouselDispatchContext.Provider>
  );
}
