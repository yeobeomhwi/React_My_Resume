import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFolderOpen,
} from "react-icons/ai";
import { Nav, NavItem, NavIcon, NavText } from "./Navigation.styles";

// 네비게이션 링크의 타입 정의
interface NavLinkProps {
  path: string; // 페이지 경로
  icon: React.ReactNode; // 메뉴 아이콘
  text: string; // 메뉴 텍스트
}

// 네비게이션 메뉴 데이터
const navLinks: NavLinkProps[] = [
  {
    path: "/",
    icon: <AiOutlineHome size={24} />, // 홈 아이콘
    text: "Home",
  },
  {
    path: "/resume",
    icon: <AiOutlineUser size={24} />, // 이력서 아이콘
    text: "Resume",
  },
  {
    path: "/portfolio",
    icon: <AiOutlineFolderOpen size={24} />, // 포트폴리오 아이콘
    text: "Portfolio",
  },
];

// 네비게이션 컴포넌트
const Navigation = () => {
  const location = useLocation(); // 현재 페이지 경로 가져오기

  return (
    <Nav>
      {navLinks.map((link) => (
        <NavItem
          key={link.path}
          isActive={location.pathname === link.path} // 현재 페이지 여부 확인
          whileHover={{ scale: 1.1 }} // 호버시 확대 효과
          whileTap={{ scale: 0.95 }} // 클릭시 축소 효과
        >
          <Link to={link.path}>
            <NavIcon>{link.icon}</NavIcon>
            <NavText>{link.text}</NavText>
          </Link>
        </NavItem>
      ))}
    </Nav>
  );
};

export default Navigation;
