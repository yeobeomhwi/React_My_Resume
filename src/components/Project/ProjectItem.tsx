import { Project } from "../../types/project";
import {
  ProjectContainer,
  ProjectHeader,
  ProjectDate,
  ProjectTitle,
  ProjectStatus,
  ProjectDuration,
  Description,
  SubSection,
  SubTitle,
  List,
  ListItem,
  SkillTags,
  SkillTag,
  GitHubLink,
  TechIcon,
  TitleContainer,
} from "./ProjectItem.styles";

const getPlatformColor = (platform: string) => {
  switch (platform.toLowerCase()) {
    case "flutter":
      return "02569B"; // Flutter 파란색
    case "android":
      return "3DDC84"; // Android 초록색
    default:
      return "000000";
  }
};

const ProjectItem = ({
  date,
  title,
  duration,
  description,
  achievements,
  skills,
  githubUrl,
  status,
  platform,
}: Project) => {
  return (
    <ProjectContainer>
      <ProjectHeader>
        <ProjectDate>{date}</ProjectDate>
        <TitleContainer>
          <TechIcon
            src={`https://img.shields.io/badge/${platform}-${getPlatformColor(
              platform
            )}?style=for-the-badge&logo=${platform.toLowerCase()}&logoColor=white`}
            alt={platform}
          />
          <ProjectTitle>{title}</ProjectTitle>
        </TitleContainer>
      </ProjectHeader>

      <Description>
        <div style={{ display: "flex", marginBottom: "12px" }}>
          <div style={{ marginRight: "24px" }}>
            <div>
              <ProjectStatus status={status}>{status}</ProjectStatus>
              <ProjectDuration>{duration}일</ProjectDuration>
            </div>
          </div>
          <div>{description}</div>
        </div>

        <SubSection>
          <SubTitle>주요기능 & 성과 및 학습한 내용</SubTitle>
          <List>
            {achievements.map((item, index) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
          </List>
        </SubSection>

        <SubSection>
          <SubTitle>사용한 기술</SubTitle>
          <SkillTags>
            {skills.map((item, index) => (
              <SkillTag key={index}>{item}</SkillTag>
            ))}
          </SkillTags>
        </SubSection>

        {githubUrl && (
          <SubSection>
            <GitHubLink
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TechIcon
                src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=Github&logoColor=white"
                alt="GitHub"
              />
              GitHub에서 보기
            </GitHubLink>
          </SubSection>
        )}
      </Description>
    </ProjectContainer>
  );
};
export default ProjectItem;
