import { skipToken, useQuery } from '@tanstack/react-query';
import { fetcher } from '@/shared/apis/fetcher';

const getDestination = () => {
  return fetcher.get<any>(`api/destination`);
};

const useGetDestinationQuery = (number: any) =>
  useQuery({
    queryKey: ['getDestination'],
    queryFn: number === 1 ? () => getDestination() : skipToken,
  });

export default useGetDestinationQuery;
