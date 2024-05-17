import { useMutation } from '@tanstack/react-query';
import { fetcher } from '@/shared/apis/fetcher';

const postSelectDestination = (body: any) => {
  console.log('aa', fetcher.post);
  return fetcher.post<any>(`api/destination/select`, {
    json: body,
  });
};

const useSelectDestinationMutation = () =>
  useMutation({
    mutationFn: (body: any) => postSelectDestination(body),
  });

export default useSelectDestinationMutation;
