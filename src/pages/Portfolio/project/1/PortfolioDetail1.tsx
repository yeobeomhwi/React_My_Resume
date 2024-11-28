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
} from "./PortfolioDetail1.styles";
import { AiFillGithub } from "react-icons/ai";

const PortfolioDetail1 = () => {
  const navigate = useNavigate();

  return (
    <>
      <BackButton onClick={() => navigate("/portfolio")}>
        <IoIosArrowBack />
        목록으로 돌아가기
      </BackButton>
      <Container>
        <Title>SNS앱 만들기</Title>
        <ProjectInfo>
          <InfoItem>
            <span>개발 기간</span>
            <p>2024.11.11 ~ 2024.11.22</p>
          </InfoItem>
          <InfoItem>
            <span>역할</span>
            <div>
              <p>로그인 & 회원가입 화면 및 기능</p>
              <p>프로필 기능</p>
              <p>Post Card UI</p>
              <p>Functions 구현</p>
              <p>FCM 기능</p>
              <p>좋아요 기능</p>
              <p>오프라인 모드</p>
              <p>네트워크 상태 창 화면 및 기능</p>
              <p>라우터 및 바텀 네비게이션</p>
            </div>
          </InfoItem>
        </ProjectInfo>

        <Image
          src="https://yeobeomhwi.github.io/React_My_Resume/images/1/main.jpg"
          alt="포트폴리오 메인 이미지"
        />
        <Section>
          <SectionTitle>프로젝트 소개</SectionTitle>
          <Content>
            본 프로젝트는 SQLite와 Firebase를 활용하여 SNS 앱의 로컬
            데이터베이스를 구축하고, 오프라인 환경에서도 사용자 데이터를
            효율적으로 관리할 수 있는 기능을 제공하는 것을 목표로 하였습니다. 주요
            구현 사항으로는 Firebase의 오프라인 기능과 캐시를 이용한 데이터 저장
            및 네트워크 복구 시 Firebase와의 자동 동기화 기능이 포함됩니다. 이를
            통해 Offline-First 앱의 개발 방법론을 적용하였으며, 로컬
            데이터베이스와 원격 서버 간의 데이터 동기화 전략을 학습하였습니다.
            또한, 앱의 상태 관리를 위해 Flutter의 Riverpod을 사용하여 각 기능의
            상태를 체계적으로 제어하고, 안정적인 사용자 경험을 제공하는 데 중점을
            두었습니다. 이 프로젝트는 오프라인 및 온라인 환경에서 일관성 있는
            데이터 관리를 구현하는 데 있어 중요한 학습 경험이 되었습니다.
          </Content>
        </Section>

        <Section>
          <SectionTitle>주요 기능</SectionTitle>
          <List>
            <ListItem>
              <details>
                <summary>회원가입 기능</summary>
                <div className="details-content">
                  <video controls autoPlay muted loop width="100%">
                    <source
                      src="https://yeobeomhwi.github.io/React_My_Resume/images/1/signup/signup.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <p>Firebase Auth를 통해 회원가입 기능 구현 </p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/1/signup/signup_auth.jpg"
                    alt="회원가입 후 auth데이터"
                  />
                  <p>
                    그 후 Store에 유저 켈력션이 생성됨. 프로필 이미지는 Storage에
                    저장되어있는 기본 이미지를 사용하여 저장
                  </p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/1/signup/signup_data.jpg"
                    alt="회원가입 후 user컬렉션"
                  />
                </div>
              </details>
            </ListItem>

            <ListItem>
              <details>
                <summary>로그인 기능(Email & Google)</summary>
                <div className="details-content">
                  <video controls autoPlay muted loop width="100%">
                    <source
                      src="https://yeobeomhwi.github.io/React_My_Resume/images/1/login/login.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <p>이메일 로그인과 구글 로그인을 Firebase Auth를 통해 구현</p>
                  <p>로그인에 성공하면 user컬렉션에 FcmToken이 저장됨</p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/1/login/login_data_1.jpg"
                    alt="로그인 후 user컬렉션"
                  />
                  <p>
                    그 후 알림 데이터를 받아 저장하기 위한 Notifications컬렉션을
                    생성함.
                  </p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/1/login/login_data_2.jpg"
                    alt="로그인 후 Notifications컬렉션"
                  />
                </div>
              </details>
            </ListItem>

            <ListItem>
              <details>
                <summary>사용자 인증 및 프로필 관리</summary>
                <div className="details-content">
                  <video controls autoPlay muted loop width="100%">
                    <source
                      src="https://yeobeomhwi.github.io/React_My_Resume/images/1/profile/profile.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <p>
                    프로필 사진 변경 기능: 디바이스 갤러리에서 사진을 선택해
                    auth에 업로드
                  </p>
                  <p>프로필 닉네임 변경 기능: 닉네임 변경후 auth에 업로드</p>
                  <p></p>
                  <p>- 오프라인 데이터 불러오기</p>
                  <p> Auth로 로그인한 유저의 정보를 받아 </p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/1/profile/offline_1.jpg"
                    alt="오프라인 코드_1"
                  />
                  <p>SQFlite를 사용하여 State에 넣어 데이터를 표시</p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/1/profile/offline_1.jpg"
                    alt="오프라인 코드_2"
                  />
                </div>
              </details>
            </ListItem>

            <ListItem>
              <details>
                <summary>피드(Feed) 기능</summary>
                <div className="details-content">
                  <p>- 게시물 생성: 온라인</p>
                  <video controls autoPlay muted loop width="100%">
                    <source
                      src="https://yeobeomhwi.github.io/React_My_Resume/images/1/feed/feed_online.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <p>게시물 생성 데이터</p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/1/feed/feed_online_data.jpg"
                    alt="게시물 생성 데이터"
                  />

                  <p>- 게시물 생성: 오프라인</p>
                  <video controls autoPlay muted loop width="100%">
                    <source
                      src="https://yeobeomhwi.github.io/React_My_Resume/images/1/feed/feed_offline.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/1/feed/feed_offline_code.jpg"
                    alt="게시물 생성 오프라인 코드"
                  />

                  <p>- 게시물 생성: 오프라인에서 온라인으로 변경</p>
                  <video controls autoPlay muted loop width="100%">
                    <source
                      src="https://yeobeomhwi.github.io/React_My_Resume/images/1/feed/feed_offline_to_online.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/1/feed/feed_online_to_offline_code.jpg"
                    alt="게시물 생성 오프라인에서 온라인 코드"
                  />
                  <p>Store에 ImageUrl이 변경</p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/1/feed/image_change.jpg"
                    alt="게시물 이미지 URL 변경"
                  />
                </div>
              </details>
            </ListItem>

            <ListItem>
              <details>
                <summary>== Feed기능 에서 트러블 슈팅 == </summary>
                <div className="details-content">
                  <p>
                    오프라인 상태에서 이미지를 보여주기 위해 로컬 이미지 주소를
                    업로드함. 그 상황에서 StorageURL이 들어가 있는 데이터와 로컬
                    이미지 주소가 들어있는 데이터 둘다 이미지를 보여주기위해
                    아래와 이미지와 같이 http로 시작하는 StorageURL , /data로
                    시작하는 로컬 이미지를 구분지어 이미지를 보여줌
                  </p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/1/feed/post_card_code.jpg"
                    alt="postCard 코드"
                  />
                  <p>
                    StorageURL 이미지를 오프라인에서도 보여주기 위해{" "}
                    Cached_network_image 패키지를 사용
                  </p>
                  <p>
                    Cached_Network_Image는 주어진 URL에서 이미지를 다운로드하고,
                    이를 디스크에 캐시하여 이후에 네트워크가 없거나 이미지를 다시
                    요청할 때 로컬에서 캐시된 이미지를 불러옵니다. 이를 통해
                    네트워크 요청을 최소화하고, 더 빠르게 이미지를 표시할 수
                    있습니다.
                  </p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/1/feed/cached_network_image.jpg"
                    alt="Cached_network_image 코드"
                  />
                </div>
              </details>
            </ListItem>

            <ListItem>
              <details>
                <summary>좋아요 & 댓글 기능 및 알림</summary>
                <div className="details-content">
                  <p>
                    좋아요를 누르면 아래와 같이 Likes 배열에 UID가 들어간다.
                    좋아요의 갯수는 length를 사용하여 구한다.
                  </p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/1/like_comment/like.jpg"
                    alt="좋아요 코드"
                  />
                  <p></p>
                  <p>알림은 Functions와 FCM을 사용하여 구현</p>
                  <video controls autoPlay muted loop width="100%">
                    <source
                      src="https://yeobeomhwi.github.io/React_My_Resume/images/1/like_comment/like_comments.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <p></p>
                  <p>알림 스크린</p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/1/like_comment/notifi.jpg"
                    alt="알림 스크린"
                  />
                  <p>
                    데이터에 "like", "comment" 2개의 타입을 두어 좋아요와 댓글을
                    구분 지음 타입에 맞춰 아이콘을 넣고 타입이 comment 라면 댓글
                    내용을 추가로 알려준다.
                  </p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/1/like_comment/notifi_code.jpg"
                    alt="알림 데이터"
                  />
                </div>
              </details>
            </ListItem>

            <ListItem>
              <details>
                <summary>Functions 로직</summary>
                <div className="details-content">
                  <p>
                    게시물에 "좋아요"가 추가되었는지 확인합니다.
                    이전(previousLikes) "좋아요"와 현재(currentLikes) "좋아요"
                    수를 비교하여 새로운 "좋아요"가 추가되었는지 확인합니다.
                  </p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/1/functions/functions_1.jpg"
                    alt="functions_code_1"
                  />
                  <p>
                    게시물 소유자와 "좋아요"를 누른 사람이 동일한 경우 알림을
                    보내지 않습니다.
                  </p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/1/functions/functions_2.jpg"
                    alt="functions_code_2"
                  />
                  <p>게시물 소유자의 데이터에서 FCM토큰을 가져옵니다.</p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/1/functions/functions_3.jpg"
                    alt="functions_code_3"
                  />
                  <p>"좋아요"를 누른 사용자의 데이터에서 이름을 가져옵니다.</p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/1/functions/functions_4.jpg"
                    alt="functions_code_4"
                  />
                  <p>
                    "좋아요"를 누른 사용자의 이름과 게시물 정보를 포함한 FCM
                    메시지를 생성합니다.
                  </p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/1/functions/functions_5.jpg"
                    alt="functions_code_5"
                  />
                  <p>
                    Firebase Cloud Messaging을 통해 게시물 소유자에게 알림을
                    전송합니다.
                  </p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/1/functions/functions_6.jpg"
                    alt="functions_code_6"
                  />
                  <p>
                    전송된 알림 정보를 Firestore의 "notifications" 컬렉션에
                    저장합니다. 이를 통해 알림 기록을 관리합니다.
                  </p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/1/functions/functions_7.jpg"
                    alt="functions_code_7"
                  />
                  <p>
                    댓글 알림의 경우 "comment"를 추가로 넣고 type을 "comment"로
                    넣어 알림의 타입을 구분지어 관리한다.
                  </p>
                  <img
                    src="https://yeobeomhwi.github.io/React_My_Resume/images/1/functions/functions_8.jpg"
                    alt="functions_code_8"
                  />
                </div>
              </details>
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>사용 기술 및 중요 패키지</SectionTitle>
          <TechStack>
            <TechItem>Dart</TechItem>
            <TechItem>Flutter</TechItem>
            <TechItem>flutter_riverpod</TechItem>
            <TechItem>connectivity_plus</TechItem>
            <TechItem>Firebase_auth</TechItem>
            <TechItem>Firebase_cloud_firestore</TechItem>
            <TechItem>Firebase_cloud_functions</TechItem>
            <TechItem>Firebase_cloud_storage</TechItem>
            <TechItem>Firebase_cloud_messaging</TechItem>
            <TechItem>shared_preferences</TechItem>
            <TechItem>flutter_local_notifications</TechItem>
            <TechItem>permission_handler</TechItem>
            <TechItem>cached_network_image</TechItem>
            <TechItem>image_picker</TechItem>
            <TechItem>go_router</TechItem>
            <TechItem>path_provider</TechItem>
          </TechStack>
        </Section>

        <Section>
          <SectionTitle>링크</SectionTitle>
          <div style={{ display: "flex", gap: "10px" }}>
            <LinkButton
              href="https://github.com/yeobeomhwi/Flutter-SNS"
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

export default PortfolioDetail1;
