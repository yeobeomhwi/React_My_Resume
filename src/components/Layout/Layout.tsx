import styled from "@emotion/styled";
import Navigation from "./Navigation";

// 레이아웃 래퍼 스타일 컴포넌트
const LayoutWrapper = styled.div`
  min-height: 100vh;  // 최소 높이를 화면 전체 높이로 설정
  padding: 20px;      // 내부 여백
`;

// 레이아웃 컴포넌트
interface LayoutProps {
  children: React.ReactNode;  // 자식 컴포넌트 타입 정의
}

// 전체 레이아웃을 감싸는 컴포넌트
const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutWrapper>
      {children}           {/* 자식 컴포넌트 렌더링 */}
      <Navigation />      {/* 하단 네비게이션 바 */}
    </LayoutWrapper>
  );
};

export default Layout;