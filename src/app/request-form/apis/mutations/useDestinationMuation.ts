import { useMutation } from '@tanstack/react-query';
import { fetcher } from '@/shared/apis/fetcher';

const postDestination = (body: any) => {
  console.log('aa', fetcher.post);
  return fetcher.post<any>(`api/destination`, {
    json: body,
  });
};

const useDestinationMutation = () =>
  useMutation({
    mutationFn: (body: any) => postDestination(body),
  });

export default useDestinationMutation;
