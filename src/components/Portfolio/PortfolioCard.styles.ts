import styled from "@emotion/styled";
import { motion } from "framer-motion";

// 카드 컨테이너
export const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 320px; // 카드 너비 고정
  height: 400px; // 카드 높이 증가
`;

// 썸네일 이미지
export const Thumbnail = styled.img`
  width: 100%;
  height: 180px; // 이미지 높이 조정
  object-fit: cover;
`;

// 카드 콘텐츠
export const Content = styled.div`
  padding: 20px;
  height: 220px; // 콘텐츠 영역 높이 증가
  display: flex;
  flex-direction: column;
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
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

// 태그 컨테이너
export const Tags = styled.div`
  display: flex;
  gap: 8px;
  margin-top: auto;
  flex-wrap: wrap;
  padding-top: 12px;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
`;

// 태그
export const Tag = styled.span`
  background: rgba(0, 255, 255, 0.2);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
`;
