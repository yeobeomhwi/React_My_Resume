import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import {
  Container,
  Title,
  Image,
  Content,
  BackButton,
  Section,
  SectionTitle,
  List,
  ListItem,
  TechStack,
  TechItem,
  ProjectInfo,
  InfoItem,
  LinkButton,
} from "./PortfolioDetail2.styles";
import { AiFillGithub } from "react-icons/ai";

const PortfolioDetail2 = () => {
  const navigate = useNavigate();

  return (
    <>
      <BackButton onClick={() => navigate("/portfolio")}>
        <IoIosArrowBack />
        목록으로 돌아가기
      </BackButton>
      <Container>
        <Title>예약 채팅 앱</Title>
        <ProjectInfo>
          <InfoItem>
            <span>개발 기간</span>
            <p>2024.11.11 ~ 2024.11.22</p>
          </InfoItem>
          <InfoItem>
            <span>역할</span>
            <div>
              <p>UI 디자인 및 구현</p>
              <p>로그인 화면 및 기능</p>
              <p>회원가입 화면 및 기능</p>
              <p>데이터베이스 설계</p>
              <p>메인 화면 및 기능</p>
              <p>메인 화면 무한 스크롤</p>
              <p>주제 필터링 화면 및 기능</p>
              <p>프로필 설정 화면 및 기능</p>
            </div>
          </InfoItem>
        </ProjectInfo>

        <Image
          src="https://yeobeomhwi.github.io/React_My_Resume/images/portfolio1.jpg"
          alt="포트폴리오 메인 이미지"
        />

        <Section>
          <SectionTitle>프로젝트 소개</SectionTitle>
          <Content>
            이 프로젝트는 특정 시간에 시작되는 채팅방과 모바일 알림 기능을
            구현하기 위해 진행되었습니다. 처음부터 끝까지 하나의 기본적인 모바일
            애플리케이션 서비스를 스스로 작성하는 능력을 키우는 것을 목표로
            하였으며, 특히 Flutter에서 Firebase 서비스를 처음으로 사용해보는
            도전적인 프로젝트였습니다.
          </Content>
        </Section>

        <Section>
          <SectionTitle>주요 기능</SectionTitle>
          <List>
            <ListItem>
              <details>
                <summary>기기 알림 예약, 취소</summary>
                <div className="details-content">
                  <p>알림 예약 및 취소 기능에 대한 상세 설명...</p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/portfolio1.jpg"
                    alt="알림 예약 화면"
                  />
                  <img src="/path/to/image2.jpg" alt="알림 취소 화면" />
                </div>
              </details>
            </ListItem>
            <ListItem>
              <details>
                <summary>채팅 구현</summary>
                <div className="details-content">
                  <p>채팅 기능 구현에 대한 상세 설명...</p>
                  <img src="/path/to/chat1.jpg" alt="채팅 화면" />
                  <img src="/path/to/chat2.jpg" alt="채팅 목록" />
                </div>
              </details>
            </ListItem>
            <ListItem>
              <details>
                <summary>라우팅 적용</summary>
                <div className="details-content">
                  <p>알림 예약 및 취소 기능에 대한 상세 설명...</p>
                  <img src="/path/to/image1.jpg" alt="알림 예약 화면" />
                  <img src="/path/to/image2.jpg" alt="알림 취소 화면" />
                </div>
              </details>
            </ListItem>
            <ListItem>
              <details>
                <summary>채팅방 목록 로딩</summary>
                <div className="details-content">
                  <p>알림 예약 및 취소 기능에 대한 상세 설명...</p>
                  <img src="/path/to/image1.jpg" alt="알림 예약 화면" />
                  <img src="/path/to/image2.jpg" alt="알림 취소 화면" />
                </div>
              </details>
            </ListItem>
            <ListItem>
              <details>
                <summary>주제별 채팅방 개수 조회</summary>
                <div className="details-content">
                  <p>알림 예약 및 취소 기능에 대한 상세 설명...</p>
                  <img src="/path/to/image1.jpg" alt="알림 예약 화면" />
                  <img src="/path/to/image2.jpg" alt="알림 취소 화면" />
                </div>
              </details>
            </ListItem>
            <ListItem>
              <details>
                <summary>특정 채팅방 조회</summary>
                <div className="details-content">
                  <p>알림 예약 및 취소 기능에 대한 상세 설명...</p>
                  <img src="/path/to/image1.jpg" alt="알림 예약 화면" />
                  <img src="/path/to/image2.jpg" alt="알림 취소 화면" />
                </div>
              </details>
            </ListItem>
            <ListItem>
              <details>
                <summary>무한 스크롤</summary>
                <div className="details-content">
                  <p>알림 예약 및 취소 기능에 대한 상세 설명...</p>
                  <img src="/path/to/image1.jpg" alt="알림 예약 화면" />
                  <img src="/path/to/image2.jpg" alt="알림 취소 화면" />
                </div>
              </details>
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>사용 기술</SectionTitle>
          <TechStack>
            <TechItem>Dart</TechItem>
            <TechItem>Flutter</TechItem>
            <TechItem>Firebase</TechItem>
            <TechItem>shared_preferences</TechItem>
            <TechItem>flutter_local_notifications</TechItem>
          </TechStack>
        </Section>

        <Section>
          <SectionTitle>링크</SectionTitle>
          <div style={{ display: "flex", gap: "10px" }}>
            <LinkButton href="https://github.com/username/repo" target="_blank">
              <AiFillGithub /> GitHub
            </LinkButton>
          </div>
        </Section>
      </Container>
    </>
  );
};

export default PortfolioDetail2;
