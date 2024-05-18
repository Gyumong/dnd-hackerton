import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Splash = () => {
  const { push } = useRouter();
  useEffect(() => {
    // 컴포넌트가 마운트된 후 3초 뒤에 실행될 함수
    const timer = setTimeout(() => {
      // 여기에 페이지 이동하고 싶은 경로를 지정합니다. 예: '/home'
      push('/request-form?step=0');
    }, 3000); // 3000ms = 3초 후에 실행

    return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머를 정리합니다.
  }, []); // 의존성 배열에 router를 추가합니다.
  return (
    <div className="flex h-dvh justify-center bg-[#6687FC]">
      <div className="h-[200px] pt-[250px]">
        <Image src="/icons/splash_final.gif" width={200} height={200} alt="splash" />
      </div>
    </div>
  );
};

export default Splash;
