import { useMutation } from '@tanstack/react-query';
import { fetcher } from '@/shared/apis/fetcher';

const postFinalResult = (body: any) => {
  console.log('aa', fetcher.post);
  return fetcher.post<any>(`api/save-gotcha`, {
    json: body,
  });
};

const useSaveGotcha = () =>
  useMutation({
    mutationFn: (body: any) => postFinalResult(body),
  });

export default useSaveGotcha;
