import React from "react";
import {
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
import {
  Container,
  Section,
  Header,
  Name,
  Title,
  SubTitle,
  Text,
  List,
  ListItem,
  ContactInfo,
  ContactLink,
  TechIcon,
} from "./Resume.styles";
import { projects } from "../../data/projects";
import ProjectItem from "../../components/Project/ProjectItem";

const Resume = () => {
  return (
    <Container>
      <Header>
        <Name>여범휘</Name>
        <SubTitle>신입 앱 개발자</SubTitle>
        <ContactInfo>
          <ContactLink href="mailto:yeobh0828@naver.com">
            <AiOutlineMail size={20} /> yeobh0828@naver.com
          </ContactLink>
          <ContactLink href="https://github.com/yeobeomhwi" target="_blank">
            <AiOutlineGithub size={20} /> GitHub
          </ContactLink>
          <ContactLink
            href="https://www.instagram.com/control.__.c/"
            target="_blank"
          >
            <AiOutlineInstagram size={20} /> control._.c
          </ContactLink>
        </ContactInfo>
      </Header>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Title>소개</Title>
        <Text>
          {"공식 문서와 다른 개발자의 코드를 자주 참고하며,\n"}
          {" 나만의 코드를 작성하는 신입 앱 개발자입니다.\n"}
          {"Kotlin과 Flutter를 사용한 모바일 앱 개발 경험을 통해\n"}
          {"실제로 동작하는 기능을 구현하고, 유지보수가 쉬운 코드를\n"}
          {"작성하는 데 집중하고 있습니다.\n"}
          {"새로운 기술을 빠르게 익히고, 협업을 통해 다양한 문제를\n"}
          {"창의적으로 해결하는 것에 열정을 가지고 있습니다.\n"}
          {"많은 사람들에게 가치를 줄 수 있는 서비스를 만드는 데\n"}
          {"기여하고 싶습니다."}
        </Text>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Title>기술 스택</Title>
        <List>
          <ListItem>
            <TechIcon
              src="https://img.shields.io/badge/Kotlin-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white"
              alt="Kotlin"
            />
            안드로이드 앱 개발
          </ListItem>
          <ListItem>
            <TechIcon
              src="https://img.shields.io/badge/Dart-0175C2?style=for-the-badge&logo=dart&logoColor=white"
              alt="Dart"
            />
            Dart - Flutter 앱 개발
          </ListItem>
          <ListItem>
            <TechIcon
              src="https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white"
              alt="Flutter"
            />
            Flutter - 크로스 플랫폼 앱 개발
          </ListItem>
          <ListItem>
            <TechIcon
              src="https://img.shields.io/badge/CentOS-262577?style=for-the-badge&logo=centos&logoColor=white"
              alt="CentOS"
            />
            Linux(CentOS) - 서버 운영체제
          </ListItem>
          <ListItem>
            <TechIcon
              src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white"
              alt="MySQL"
            />
            MySQL - 데이터베이스
          </ListItem>
          <ListItem>
            <TechIcon
              src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=Github&logoColor=white"
              alt="GitHub"
            />
            GitHub - 버전 관리
          </ListItem>
          <ListItem>
            <TechIcon
              src="https://img.shields.io/badge/GitLab-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white"
              alt="GitLab"
            />
            GitLab - 버전 관리
          </ListItem>
          <ListItem>
            <TechIcon
              src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=black"
              alt="Firebase"
            />
            Firebase - 백엔드 서비스
          </ListItem>
          <ListItem>
            <TechIcon
              src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"
              alt="Figma"
            />
            Figma - UI/UX 디자인
          </ListItem>
          <ListItem>
            <TechIcon
              src="https://img.shields.io/badge/Adobe%20Photoshop-31A8FF?style=for-the-badge&logo=adobe%20photoshop&logoColor=white"
              alt="Photoshop"
            />
            Photoshop - 이미지 편집
          </ListItem>
          <ListItem>
            <TechIcon
              src="https://img.shields.io/badge/Adobe%20Illustrator-FF9A00?style=for-the-badge&logo=adobe%20illustrator&logoColor=white"
              alt="Illustrator"
            />
            Illustrator - 벡터 그래픽 디자인
          </ListItem>
        </List>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Title>프로젝트 경험</Title>
        {projects.map((project) => (
          <ProjectItem key={project.id} {...project} />
        ))}
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Title>교육</Title>
        <SubTitle>전주대학교 (2021.03 - 2025.02)</SubTitle>
        <Text>전공: 컴퓨터공학과 - 졸업 예정</Text>
        <br></br>
        <SubTitle>전주공업 고등학교 (2014.03 - 2017.02)</SubTitle>
        <Text>전공: 전자과 - 졸업</Text>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Title>자격증</Title>
        <SubTitle>정보처리기사 </SubTitle>
        <Text>취득일: 2024.12.11</Text>
        <br></br>
        <SubTitle>정보처리기능사</SubTitle>
        <Text>취득일: 2016.09.12</Text>
        <br></br>
        <SubTitle>전자캐드기능사</SubTitle>
        <Text>취득일: 2016.07.15</Text>
        <br></br>
        <SubTitle>컴퓨터그래픽스운용기능사</SubTitle>
        <Text>취득일: 2015.10.16</Text>
        <br></br>
      </Section>
    </Container>
  );
};

export default Resume;
