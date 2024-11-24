export interface PortfolioItem {
  id: string; // 고유 ID
  title: string; // 프로젝트 제목
  description: string; // 간단한 설명
  thumbnail: string; // 썸네일 이미지 경로
  tags: string[]; // 기술 스택 태그
  date: string; // 제작 기간
}
