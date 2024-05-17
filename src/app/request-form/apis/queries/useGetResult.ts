import { skipToken, useQuery } from '@tanstack/react-query';
import { fetcher } from '@/shared/apis/fetcher';

const getResult = () => {
  return fetcher.get<any>(`api/result`);
};

const useGetResultQuery = (number: any) =>
  useQuery({
    queryKey: ['getResult'],
    queryFn: number === 2 ? () => getResult() : skipToken,
  });

export default useGetResultQuery;
