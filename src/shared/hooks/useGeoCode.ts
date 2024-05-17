import { useQuery } from '@tanstack/react-query';

// 타입 정의: 주소를 기반으로 한 지오코딩 결과
interface GeocodeResult {
  latitude: number;
  longitude: number;
  // 필요에 따라 더 많은 속성 정의
}

// 함수: 주소를 사용하여 좌표를 얻는 Naver Open API의 geocode를 호출
const fetchGeocode = async (address: string, searchCenterCoord?: string): Promise<GeocodeResult> => {
  const clientId = 'zdit26k2cy'; // 애플리케이션 등록 시 발급받은 client id값
  const clientSecret = 'U62xPl6wPtOzsAivZfHfDNgrCCW2MoRVY8JZsFF9'; // 애플리케이션 등록 시 발급받은 client secret값
  const encodedAddress = encodeURIComponent(address);
  const coordinate = searchCenterCoord ? encodeURIComponent(searchCenterCoord) : '';
  const url = `/map-geocode/v2/geocode?query=${encodedAddress}${coordinate ? `&coordinate=${coordinate}` : ''}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'X-NCP-APIGW-API-KEY-ID': clientId,
      'X-NCP-APIGW-API-KEY': clientSecret,
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  const items = data.addresses;
  const firstItem = items.length > 0 ? items[0] : null;

  if (firstItem) {
    const latitude = Number(firstItem.y);
    const longitude = Number(firstItem.x);
    return { latitude, longitude };
  } else {
    throw new Error('No geocode result found');
  }
};

// 커스텀 훅: 주소를 기반으로 좌표를 얻음
const useGeocode = (address: string, searchCenterCoord?: string) => {
  return useQuery({
    queryKey: ['geocode', address, searchCenterCoord],
    queryFn: () => fetchGeocode(address, searchCenterCoord),
    enabled: !!address, // 주소가 제공될 때만 쿼리 실행
  });
};

export default useGeocode;
