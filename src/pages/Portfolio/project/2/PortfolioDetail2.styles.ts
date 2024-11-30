import styled from "@emotion/styled";

export const Container = styled.div`
  padding-top: 100px;

  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 2.5rem;
  color: #2d3436;
`;

export const ProjectInfo = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 30px;
`;

export const InfoItem = styled.div`
  span {
    font-size: 0.9rem;
    color: #636e72;
    display: block;
    margin-bottom: 5px;
  }

  div {
    // p태그들을 감싸는 div를 추가
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  p {
    background: rgba(52, 152, 219, 0.1);
    color: #3498db;
    padding: 8px 16px;
    border-radius: 20px;
    font-weight: 500;
    font-size: 1.1rem;
    margin: 0; // 기본 마진 제거
  }
`;

export const Image = styled.img`
  width: 100%;
  max-height: 600px;
  object-fit: cover;
  border-radius: 15px;
  margin-bottom: 40px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; // 이미지 비율 유지
  }
`;

export const Section = styled.section`
  margin-bottom: 40px;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #2d3436;
  margin-bottom: 15px;
  font-weight: 600;
`;

export const Content = styled.div`
  line-height: 1.8;
  color: #636e72;
  font-size: 1.1rem;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 15px;

  details {
    cursor: pointer;
  }

  summary {
    font-size: 1.1rem;
    color: #2d3436;
    padding: 10px;
    background-color: #f5f6fa;
    border-radius: 5px;

    &:hover {
      background-color: #dfe6e9;
    }
  }

  .details-content {
    padding: 15px;
    margin-top: 10px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 20px;

    p {
      margin: 0;
      line-height: 1.6;
    }

    img {
      width: 100%;
      max-width: 600px; // 상세 내용의 이미지 최대 너비 증가
      height: auto;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
  }
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const TechItem = styled.span`
  background: rgba(52, 152, 219, 0.1);
  color: #3498db;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
`;

export const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: rgba(52, 152, 219, 0.1);
  color: #3498db;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(52, 152, 219, 0.2);
  }
`;

export const BackButton = styled.button`
  position: fixed; // 고정 위치
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; // 다른 요소들 위에 표시
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 20px;
  background-color: white;
  border: none;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  font-size: 1rem;
  color: #2d3436;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #f5f6fa;
  }

  svg {
    // 아이콘 스타일
    font-size: 1.2rem;
  }
`;
