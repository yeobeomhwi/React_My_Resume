import styled from "@emotion/styled";
import { motion } from "framer-motion";

// 카드 컨테이너
export const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 400px; // 너비만 고정
  max-height: 600px; // 최대 높이만 설정
  display: flex;
  flex-direction: column;
`;

// 썸네일 이미지
export const Thumbnail = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  flex-shrink: 0; // 이미지 크기 고정
`;

// 카드 콘텐츠
export const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1; // 남은 공간 차지
  min-height: 0; // flex-grow가 제대로 작동하도록
`;

// 제목
export const Title = styled.h3`
  margin: 0 0 12px 0;
  font-size: 20px;
  font-weight: 600;
`;

// 설명
export const Description = styled.p`
  margin: 0 0 16px 0;
  font-size: 14px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 1);
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; // 3줄로 제한
  -webkit-box-orient: vertical;
  min-height: 0; // flex-grow가 제대로 작동하도록
`;

// 태그 컨테이너
export const Tags = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  padding-top: 12px;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  margin-top: auto; // 하단에 고정
`;

// 태그
export const Tag = styled.span`
  background: rgba(0, 255, 255, 0.2);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap; // 태그 줄바꿈 방지
`;

export const Date = styled.span`
  font-size: 0.9rem;
  color: #636e72;
  margin-bottom: 8px;
  display: block;
`;
