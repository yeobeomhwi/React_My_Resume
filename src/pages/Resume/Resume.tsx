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
          사용자에게 가치 있는 앱을 만드는 것을 목표로 하는 신입 앱
          개발자입니다. 안정적이고 효율적인 코드를 작성하는 데 집중하며, 꾸준한
          학습과 성장을 추구합니다.
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
              src="https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white"
              alt="Flutter"
            />
            Flutter - 크로스 플랫폼 앱 개발
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
    </Container>
  );
};

export default Resume;
