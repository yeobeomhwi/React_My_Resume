import styled from "@emotion/styled";
import { motion } from "framer-motion";

// 전체 컨테이너: 화면 중앙 정렬과 반응형 레이아웃을 담당
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  min-height: calc(100vh - 100px); // 네비게이션 바 높이 고려

  // 모바일 화면에서 세로 배치로 변경
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
    text-align: center;
  }
`;

// 프로필 이미지: 원형 이미지와 애니메이션 효과
export const ProfileImage = styled(motion.div)`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0; // 이미지 크기 고정
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border: 4px solid rgba(255, 255, 255, 0.2);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; // 이미지 비율 유지
  }
`;

// 텍스트 콘텐츠 영역
export const Content = styled.div`
  max-width: 900px; // 텍스트 최대 너비 제한
`;

// 제목: 애니메이션 효과가 적용된 큰 텍스트
export const Title = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 24px;
  font-weight: 700;
  color: #2d3436;
  white-space: pre-line; // \n으로 줄바꿈 가능하게 설정
`;

// 설명: 자연스러운 줄간격과 색상의 텍스트
export const Description = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #636e72;
  margin-bottom: 32px;
  white-space: pre-line; // \n으로 줄바꿈 가능하게 설정
`;

// 강조 텍스트
export const HighlightText = styled.span`
  color: #3498db; // 강조색상
  font-weight: 900;
  display: inline-block;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #3498db;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;
