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
} from "./PortfolioDetail3.styles";
import { AiFillGithub } from "react-icons/ai";

const PortfolioDetail3 = () => {
  const navigate = useNavigate();

  return (
    <>
      <BackButton onClick={() => navigate("/portfolio")}>
        <IoIosArrowBack />
        목록으로 돌아가기
      </BackButton>
      <Container>
        <Title>SmartMirror - BLUR</Title>
        <ProjectInfo>
          <InfoItem>
            <span>개발 기간</span>
            <p>2024.03.05 ~ 2024.06.19</p>
          </InfoItem>
          <InfoItem>
            <span>역할</span>
            <div>
              <p>하드웨어 설계 및 제작</p>
              <p>Android 앱 개발</p>
            </div>
          </InfoItem>
        </ProjectInfo>

        <Image
          src="https://yeobeomhwi.github.io/React_My_Resume/images/3/main.jpg"
          alt="포트폴리오 메인 이미지"
        />

        <Section>
          <SectionTitle>프로젝트 소개</SectionTitle>
          <Content>
            전주대학교 2024 졸업작품으로 제작한 프로젝트 입니다.
            "[집에서 출근하기전, 화장할때, 시간이 부족할때 ! 거울과 함께 커스텀된위젯으로 더 빠르게 !]"
            <Image
              src="https://yeobeomhwi.github.io/React_My_Resume/images/3/introduction_to_project.jpg"
              alt="프로젝스 소개 이미지"
            />
          </Content>
        </Section>

        <Section>
          <SectionTitle>주요 기능</SectionTitle>
          <List>
            <ListItem>
              <details>
                <summary>시작 화면 및 기기등록</summary>
                <div className="details-content">
                  <p>
                    연결할 기기의 코드를 입력하여 기기 등록 및 시작 화면 표시
                  </p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/3/add_divce.jpg"
                    alt="기기등록 화면"
                  />
                </div>
              </details>
            </ListItem>

            <ListItem>
              <details>
                <summary>회원가입 / 로그인</summary>
                <div className="details-content">
                  <p>
                    RESTFul API를 통해서버와 통신하여 회원가입 및 로그인 기능
                    구현
                  </p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/3/signup_login.jpg"
                    alt="회원가입 화면"
                  />
                </div>
              </details>
            </ListItem>

            <ListItem>
              <details>
                <summary>얼굴 등록</summary>
                <div className="details-content">
                  <p>
                    카메라로 사진을 찍어 얼굴 이미지를 서버의 RESTFul API를 통해
                    전송
                  </p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/3/face.jpg"
                    alt="얼굴등록 화면"
                  />
                </div>
              </details>
            </ListItem>

            <ListItem>
              <details>
                <summary>이름 변경 및 이메일 변경</summary>
                <div className="details-content">
                  <p>
                    유저의 이름과 이메일을 변경할 수 있는 기능 변경할 이름 혹은
                    서버의 RESTFul API를 통해 이메일 변경
                  </p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/3/name_email_change.jpg"
                    alt="이름,이메일 변경 화면"
                  />
                </div>
              </details>
            </ListItem>

            <ListItem>
              <details>
                <summary>메인화면 및 프로필 변경</summary>
                <div className="details-content">
                  <p>메인화면 및 프로필변경화면</p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/3/main_profile_change.jpg"
                    alt="메인화면 및 프로필 변경 화면"
                  />
                </div>
              </details>
            </ListItem>

            <ListItem>
              <details>
                <summary>메시지 전송 기능</summary>
                <div className="details-content">
                  <p>
                    원하는 유저의 스마트 미러에 메시지를 남길수 있는 기능 스마트
                    미러에는 최대 3개의 메시지가 최신순으로 출력
                  </p>
                  <p>
                    {" "}
                    유저목록은 얼굴 등록한 유저의 목록 스마트 미러에 인식된
                    유저에 따라 출력되는 메시지가 변경{" "}
                  </p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/3/add_message.jpg"
                    alt="메시지 전송 화면"
                  />
                </div>
              </details>
            </ListItem>

            <ListItem>
              <details>
                <summary>일정관리</summary>
                <div className="details-content">
                  <p>
                    [kizitonwose]의 CalendarView 라이브러리를 사용하여
                    TodoList형식 일정관리 구현 기능 구현
                  </p>

                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/3/schedule_management.jpg"
                    alt="일정관리 화면"
                  />
                </div>
              </details>
            </ListItem>

            <ListItem>
              <details>
                <summary>위젯 설정</summary>
                <div className="details-content">
                  <p>스마트 미러의 위젯 위치를 설정할수 있는 기능</p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/3/widget.jpg"
                    alt="위젯 설정 화면"
                  />
                </div>
              </details>
            </ListItem>

            <ListItem>
              <details>
                <summary>하드웨어 설계 및 조립</summary>
                <div className="details-content">
                  <p>
                    autoCAD를 사용하여 하드웨어 도면 설계 후 업체에 제작 의뢰 후
                    조립
                  </p>

                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/3/hard.jpg"
                    alt="하드웨어 설계 및 조립 1"
                  />
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/3/hard2.jpg"
                    alt="하드웨어 설계 및 조립 1"
                  />
                </div>
              </details>
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>사용 기술</SectionTitle>
          <TechStack>
            <TechItem>Android SDK</TechItem>
            <TechItem>Kotlin</TechItem>
            <TechItem>Jetpack Compose</TechItem>
            <TechItem>Hilt</TechItem>
            <TechItem>Retrofit</TechItem>
            <TechItem>Kotlin Serialization</TechItem>
            <TechItem>DataStore</TechItem>
            <TechItem>Coil</TechItem>
            <TechItem>Coroutines</TechItem>
            <TechItem>Clean Architecture</TechItem>
          </TechStack>
        </Section>

        <Section>
          <SectionTitle>링크</SectionTitle>
          <div style={{ display: "flex", gap: "10px" }}>
            <LinkButton
              href="https://github.com/yeobeomhwi/2024-jj-capstone-design"
              target="_blank"
            >
              <AiFillGithub /> GitHub
            </LinkButton>
          </div>
        </Section>
      </Container>
    </>
  );
};

export default PortfolioDetail3;
