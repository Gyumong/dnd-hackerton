import Transportation from '@/app/request-form/components/steps/Transportation';

export const Steps = {
  SEARCH_DISTANCE: 0,
  DISTANCE_RESULT: 1,
  TRANSPORTATION: 2,
  GACHA: 3,
  ADD_GACHA_LOADING_PAGE: 4,
  MESSAGE_BANNER: 5,
  FINISH_RESULT_PAGE: 6,
} as const;
