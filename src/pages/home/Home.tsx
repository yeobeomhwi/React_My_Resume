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
        <img
          src="https://yeobeomhwi.github.io/React_My_Resume/images/home/my_profile_image.jpg"
          alt="프로필 이미지"
        />
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
          {"공식 문서와 다른 개발자의 코드를 자주 참고하며,\n"}
          {" 나만의 코드를 작성하는 신입 앱 개발자입니다.\n"}
          {"Kotlin과 Flutter를 사용한 모바일 앱 개발 경험을 통해\n"}
          {"실제로 동작하는 기능을 구현하고, 유지보수가 쉬운 코드를\n"}
          {"작성하는 데 집중하고 있습니다.\n"}
          {"새로운 기술을 빠르게 익히고, 협업을 통해 다양한 문제를\n"}
          {"창의적으로 해결하는 것에 열정을 가지고 있습니다.\n"}
          {"많은 사람들에게 가치를 줄 수 있는 서비스를 만드는 데\n"}
          {"기여하고 싶습니다."}
        </Description>
      </Content>
    </Container>
  );
};

export default Home;
