function convertMinutesToHoursAndMinutes(totalMinutes) {
  // 시간을 구하기 위해 총 분을 60으로 나눕니다.
  const hours = Math.floor(totalMinutes / 60);
  // 남은 분을 구하기 위해 총 분을 60으로 나눈 나머지를 구합니다.
  const minutes = totalMinutes % 60;

  // 시간이 0이 아닌 경우와 0인 경우를 분리하여 처리합니다.
  if (hours > 0) {
    // 시간이 0이 아니면 "시간분" 형태로 반환합니다.
    return `${hours}시간 ${minutes}분`;
  } else {
    // 시간이 0이면 "분"만 반환합니다.
    return `${minutes}분`;
  }
}

export { convertMinutesToHoursAndMinutes };
