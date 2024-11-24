import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 2rem;
`;

const Image = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 15px;
  margin-bottom: 20px;
`;

const Content = styled.div`
  line-height: 1.6;
  color: #333;
  margin-bottom: 30px;
`;

const BackButton = styled.button`
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const PortfolioDetail1 = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>포트폴리오 웹사이트</Title>
      <Image src="/images/portfolio1.jpg" alt="포트폴리오 웹사이트" />
      <Content>
        React와 TypeScript를 사용하여 개발한 개인 포트폴리오 웹사이트입니다.
        주요 기능:
        - 반응형 디자인
        - 프로젝트 갤러리
        - 애니메이션 효과
      </Content>
      <BackButton onClick={() => navigate('/portfolio')}>
        목록으로 돌아가기
      </BackButton>
    </Container>
  );
};

export default PortfolioDetail1;