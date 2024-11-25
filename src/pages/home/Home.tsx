import React from "react";
import {
  Container,
  ProfileImage,
  Content,
  Title,
  Description,
  HighlightText,
} from "./Home.styles";

// 홈 페이지 메인 컴포넌트
const Home = () => {
  return (
    <Container>
      {/* 프로필 이미지 섹션: 페이드인 + 스케일 애니메이션 */}
      <ProfileImage
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src="https://yeobeomhwi.github.io/React_My_Resume/images/home/my_profile_image.jpg" alt="프로필 이미지" />
      </ProfileImage>

      {/* 텍스트 콘텐츠 섹션 */}
      <Content>
        {/* 제목: 위에서 아래로 슬라이드 애니메이션 */}
        <Title
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          안녕하세요,
          {"\n"}
          신입 앱 개발자 <HighlightText>여범휘</HighlightText>입니다
        </Title>

        {/* 설명: 아래에서 위로 슬라이드 애니메이션 */}
        <Description
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {
            "사용자에게 가치 있는 앱을 만드는 것을 목표로 하는 신입 앱 개발자입니다.\n"
          }
          {"Kotlin과 Flutter를 활용한 모바일 앱 개발 경험을 바탕으로,\n"}
          {"안정적이고 효율적인 코드를 작성하는 데 집중하고 있습니다.\n"}
          {"꾸준한 학습과 성장으로 최신 기술을 빠르게 습득하며,\n"}
          {"협업을 통해 더 나은 결과를 만드는 데 열정을 가지고 있습니다.\n"}
          {
            "저의 개발 역량을 통해 많은 사람들이 사용하는 유용한 서비스를 만드는 데 기여하고 싶습니다."
          }
        </Description>
      </Content>
    </Container>
  );
};

export default Home;
