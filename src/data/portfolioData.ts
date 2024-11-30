import { PortfolioItem } from "../types/portfolio";

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "SNS앱 만들기",
    description:
      "오프라인 기능을 포함한 SNS앱 만들기, Riverpod를 사용한 상태관리, Firebase와 SQLite를 사용한 데이터베이스 설계",
    thumbnail: "https://yeobeomhwi.github.io/React_My_Resume/images/1/main.jpg",
    tags: ["Flutter", "dart", "Firebase", "SQLite"],
    date: "2024-11-11 ~ 2024-11-22",
  },
  {
    id: "2",
    title: "예약 채팅 앱",
    description:
      "특정 시간에 시작되는 채팅방과 모바일 알림 기능을 구현하기 위해 진행되었습니다.",
    thumbnail:
      "https://yeobeomhwi.github.io/React_My_Resume/images/2/main.jpg",
    tags: ["Fltter", "dart", "Firebase"],
    date: "2024.10.07 ~ 2024.10.18",
  },
  {
    id: "3",
    title: "스마트 미러 App",
    description:
      "스마트 미러에 정보를 입력, 위젯 위치 조절하는 앱 개발 및 스마트 미러 하드웨어 제작",
    thumbnail: "https://yeobeomhwi.github.io/React_My_Resume/images/3/main.jpg",
    tags: [
      "Android",
      "Kotlin",
      "Jetpack Compose",
      "Hilt",
      "Coroutines",
      "Retorfit",
    ],
    date: "2024-03-05 ~ 2024-06-19",
  },
];
