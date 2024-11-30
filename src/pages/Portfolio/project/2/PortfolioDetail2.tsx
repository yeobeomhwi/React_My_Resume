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
            <p>2024.10.07 ~ 2024.10.18
            </p>
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
          src="https://yeobeomhwi.github.io/React_My_Resume/images/2/main.jpg"
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
                <summary>데이터 베이스 구조 설계</summary>
                <div className="details-content">
                  <p>데이터 베이스 구조를 직접 설계하였습니다.</p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/2/dbms.jpg"
                    alt="데이터 베이스 구조 설계"
                  />
                </div>
              </details>
            </ListItem>

            <ListItem>
              <details>
                <summary>로그인 및 회원가입</summary>
                <div className="details-content">
                  <p>로그인 화면</p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/2/login/login.gif"
                    alt="로그인화면"
                  />
                  <p>회원가입 화면</p>
                  <p>
                    회원가입은 Setp과 Firebase Auth를 사용하여 구현하였습니다.
                  </p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/2/sign_up/sign_up_1.jpg"
                    alt="회원가입화면1"
                  />
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/2/sign_up/sign_up_2.jpg"
                    alt="회원가입화면2"
                  />
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/2/sign_up/sign_up_3.jpg"
                    alt="회원가입화면3"
                  />
                  <p>
                    회원가입에 완료되면 해당 유저의 데이터가 Store에 저장
                    됩니다.
                  </p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/2/sign_up/sign_up_data.jpg"
                    alt="회원가입 데이터"
                  />
                </div>
              </details>
            </ListItem>

            <ListItem>
              <details>
                <summary>채팅방 만들기 기능</summary>
                <div className="details-content">
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/2/create_room/CreateRoom.gif"
                    alt="채팅방 만들기 gif"
                  />
                  <p>
                    {" "}
                    날짜와 시간을 입력하기위해 DateTimePicker를 사용하였습니다.
                  </p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/2/create_room/create_room_2"
                    alt="채팅방 만들기 date"
                  />
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/2/create_room/create_room_3"
                    alt="채팅방 만들기 time"
                  />
                  <p></p>
                  <p>
                    채팅방을 만들면 아래와 같은 데이터 컬렉션들이 생성됩니다.
                  </p>
                  <p> 채팅 데이터 </p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/2/create_room/create_room_data_chat.jpg"
                    alt="채팅방 만들기 데이터_채팅 데이터"
                  />
                  <p> 예약 데이터 </p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/2/create_room/create_room_data_reservations.jpg"
                    alt="채팅방 만들기 데이터_예약 데이터"
                  />
                  <p> 채팅방 데이터 </p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/2/create_room/create_room_data_room.jpg"
                    alt="채팅방 만들기 데이터_채팅방 데이터"
                  />
                </div>
              </details>
            </ListItem>

            <ListItem>
              <details>
                <summary>채팅 구현</summary>
                <div className="details-content">
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/2/chat/Chat.gif"
                    alt="채팅 gif"
                  />
                  <p>
                    채팅방에서 내가 보낸 메시지와 다른사람이 보낸 메시지를
                    구분할수 있도록 위치와 색을 다르게 구현 했습니다.
                  </p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/2/chat/chat_2.jpg"
                    alt="채팅방 만들기 데이터_예약 데이터"
                  />
                  <p>채팅방의 데이터 입니다.</p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/2/chat/chat_data.jpg"
                    alt="채팅방 데이터"
                  />
                </div>
              </details>
            </ListItem>

            <ListItem>
              <details>
                <summary>기기 알림 예약, 취소</summary>
                <div className="details-content">
                  <p>
                    채팅방이 시작되기 전에 알림을 예약하고 취소할수 있습니다.
                  </p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/2/notifi/notifi_1.jpg"
                    alt="예약 하기 화면"
                  />
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/2/notifi/notifi_2.jpg"
                    alt="예약 취소 화면"
                  />
                  <p>
                    {" "}
                    채팅방의 시작 시간이 되면 flutter_local_notifications
                    라이브러리를 사용하여 알림을 보냅니다.
                  </p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/2/notifi/notifi_3.jpg"
                    alt="알림 화면"
                  />
                  <p> 그 후 채팅방에 참여하기 버튼이 활성화 됩니다.</p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/2/notifi/notifi_4.jpg"
                    alt="채팅방 참여 화면"
                  />
                </div>
              </details>
            </ListItem>

            <ListItem>
              <details>
                <summary>주제별 채팅방 개수 조회</summary>
                <div className="details-content">
                  <p>
                    정해진 주제별 필터링과 현재 생성된 주제별 채팅방 개수를
                    조회할수 있습니다.
                  </p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/2/Filter.gif"
                    alt="예제별 채팅방 개수 조회"
                  />
                </div>
              </details>
            </ListItem>

            <ListItem>
              <details>
                <summary>특정 채팅방 조회</summary>
                <div className="details-content">
                  <p>
                    채팅방의 제목과 내용을 통해 특정 채팅방을 조회 할 수
                    있습니다.
                  </p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/2/search/search_title.jpg"
                    alt=""
                  />
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/2/search/search_content.jpg"
                    alt=""
                  />
                </div>
              </details>
            </ListItem>

            <ListItem>
              <details>
                <summary>설정 화면</summary>
                <div className="details-content">
                  <p> 이름 변경 기능과 프로필 사진 변경 기능</p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/2/setting/Profile.gif"
                    alt=""
                  />
                  <p>
                    {" "}
                    내가 예약한 방의 목록을 보기위해 하단 부분에 참여중인 방을
                    따로 만들어 보았습니다.
                  </p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/2/setting/setting_room.jpg"
                    alt=""
                  />
                  <p>
                    {" "}
                    현재 예약중이거나 참여중인 방이 없다면 아래와 같이
                    표시됩니다.
                  </p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/2/setting/setting_1.jpg"
                    alt=""
                  />
                </div>
              </details>
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>아쉬운 부분</SectionTitle>
          <List>
            <ListItem>
              <details>
                <summary>데이터베이스 설계 시 정규화 미흡</summary>
                <div className="details-content">
                  <p>
                    이 프로젝트에서는 저를 제외한 팀원들이 개발 경험이 부족하며,
                    프로젝트 기간이 10일이라
                  </p>
                  <p>
                    데이터베이스 구조를 설계하는 과정에서 정규화를 충분히
                    고려하지 못한 점이 아쉽습니다.
                  </p>
                </div>
              </details>
            </ListItem>

            <ListItem>
              <details>
                <summary>프로필 변경 처리 속도</summary>
                <div className="details-content">
                  <p>
                    프로필 사진이 변경되는 로직이 선택한 이미지를 Fire Storage에
                    업로드하고 해당 URL을 store에 업로드하는 방식인데
                    해당과정에서 시간이 약 6초 정도 걸렸습니다.
                  </p>
                  <p>
                    {" "}
                    해당 부분의 해결 방법은 Firebase Auth를 사용하니 await
                    user?.updatePhotoURL 를 사용해서 1초 정도로 줄일수 있습니다.{" "}
                  </p>
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
            <LinkButton
              href="https://github.com/yeobeomhwi/Flutter-Group-Study-Chat-Room-Project"
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

export default PortfolioDetail2;
