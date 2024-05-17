declare module '*.svg' {
  import { FC, SVGProps } from 'react'
  const content: FC<SVGProps<SVGElement>>
  export default content
}

declare module '*.svg?url' {
  const content: any
  export default content
}


// global.d.ts

declare global {
  interface Window {
    naver: typeof naver
  }
}

// // Naver Maps 관련 타입 선언
// declare namespace naver {
//   namespace maps {
//     namespace Service {
//       // geocode 함수에 대한 간단한 타입 선언
//       function geocode(request: {query: string}, callback: (status: Status, response: GeocodeResponse) => void): void;
//
//       enum Status {
//         OK = "OK",
//         ERROR = "ERROR",
//         // 필요한 다른 상태들 추가
//       }
//
//       interface GeocodeResponse {
//         v2: {
//           addresses: Array<{
//             x: string;
//             y: string;
//             // 필요한 다른 속성들 추가
//           }>;
//         };
//       }
//     }
//   }
// }
//
// // 이 파일이 모듈로 인식되지 않도록 빈 export 사용
export {};