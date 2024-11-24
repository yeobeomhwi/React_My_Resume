import styled from "@emotion/styled";
import { motion } from "framer-motion";

// 전체 컨테이너: 최대 너비와 중앙 정렬
export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
`;

// 각 섹션: 애니메이션 효과가 적용된 영역
export const Section = styled(motion.section)`
  margin-bottom: 40px;
`;

// 헤더 영역: 이름과 연락처 정보를 포함
export const Header = styled.header`
  text-align: center;
  margin-bottom: 50px;
`;

// 이름: 큰 글씨와 강조된 스타일
export const Name = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #2d3436;
`;

// 섹션 제목: 밑줄 효과가 있는 헤더
export const Title = styled.h2`
  font-size: 1.8rem;
  color: #2d3436;
  margin-bottom: 20px;
  border-bottom: 2px solid #000;
  padding-bottom: 10px;
`;

// 부제목: 작은 크기의 회색 텍스트
export const SubTitle = styled.h3`
  font-size: 1.2rem;
  color: #000;
  margin-bottom: 15px;
`;

// 일반 텍스트: 가독성을 위한 줄간격 조정
export const Text = styled.p`
  line-height: 1.6;
  color: #2d3436;
  margin-bottom: 10px;
`;

// 리스트 컨테이너: 기본 스타일 제거
export const List = styled.ul`
  list-style: none;
  padding: 0;
  font-weight: bold;
`;

// 기술 아이콘: 이미지 크기와 간격 조정
export const TechIcon = styled.img`
  height: 28px; // 아이콘 크기 조정
  margin-right: 15px; // 아이콘과 텍스트 사이 간격
`;

// 리스트 아이템: 불릿 포인트 커스텀 스타일
export const ListItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  font-weight: bold;

  svg {
    font-size: 20px;
    margin-right: 10px;
  }
`;

// 연락처 정보 컨테이너: 가로 배치와 간격 조정
export const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

// 연락처 링크: 아이콘과 텍스트 정렬, 호버 효과
export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #636e72;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #3498db;
  }
`;
