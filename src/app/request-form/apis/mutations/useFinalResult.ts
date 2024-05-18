import { useMutation } from '@tanstack/react-query';
import { fetcher } from '@/shared/apis/fetcher';

const postFinalResult = (body: any) => {
  console.log('aa', fetcher.post);
  return fetcher.post<any>(`api/final-result`, {
    json: body,
  });
};

const useFinalGotcha = () =>
  useMutation({
    mutationFn: (body: any) => postFinalResult(body),
  });

export default useFinalGotcha;
