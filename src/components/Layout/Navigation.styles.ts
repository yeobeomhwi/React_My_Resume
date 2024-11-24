import styled from "@emotion/styled";
import { motion } from "framer-motion";

// 네비게이션 아이템의 Props 타입 정의
interface NavItemProps {
  isActive: boolean; // 현재 선택된 메뉴 여부
}

// 하단 네비게이션 바 컨테이너
export const Nav = styled.nav`
  position: fixed; // 화면 하단에 고정
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%); // 가운데 정렬
  background: rgba(128, 128, 128, 0.1); // 반투명 배경
  backdrop-filter: blur(10px); // 블러 효과
  padding: 10px 20px;
  border-radius: 20px;
  display: flex;
  gap: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); // 그림자 효과
`;

// 각 네비게이션 메뉴 아이템
export const NavItem = styled(motion.div)<NavItemProps>`
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  // 선택된 메뉴일 경우 배경색 변경
  background: ${({ isActive }) =>
    isActive ? "rgba(0, 0, 0, 0.1)" : "transparent"};

  // 링크 스타일링
  a {
    display: flex;
    flex-direction: column; // 아이콘과 텍스트 세로 배치
    align-items: center;
    gap: 5px;
  }

  // 호버 효과
  &:hover {
    background: rgba(0, 0, 0, 0.15);
  }
`;

// 아이콘 컨테이너
export const NavIcon = styled.div`
  margin-bottom: 4px;
`;

// 메뉴 텍스트
export const NavText = styled.span`
  font-size: 12px;
`;
