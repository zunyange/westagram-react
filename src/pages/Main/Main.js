import React from 'react';
import './Main.scss';
// import { useNavigate } from "react-router-dom";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Main = () => {
  return (
    <main className="main">
      <header>
        <nav>
          {/* 로고 */}
          <div className="logo">
            <div onClick="location.href='#'">
              <img
                src="/images/instagram.png"
                className="about-logo"
                alt="instagram_logo"
              />
              {/* <a><i className="fab fa-instagram"></i></a> */}
            </div>
            <div className="wefont">
              <div className="we">
                <a href="#!">Westagram</a>
              </div>
            </div>
          </div>
          {/* 검색 */}
          <div className="searchbar">
            <input type="text" placeholder="검색" />
          </div>
          {/* 상단바 아이콘들 */}
          <div className="nav">
            <div className="navo" onClick="location.href='#'"></div>
            <div className="navt" onClick="location.href='#'"></div>
            <div className="navh" oncCick="location.href='#'"></div>
          </div>
        </nav>
      </header>
      {/* 피드 사진 */}
      <article>
        <div className="feed_box"></div>
        <div className="feed">
          <div className="feed_id">
            <div className="id_round">
              <div className="id_box">
                <div className="id_box_img">
                  <img
                    className="id_img"
                    src="/images/loopy.png"
                    alt="내 프로필"
                  />
                </div>
                <div className="id_container">
                  <div className="id_name">z_zxxn_n</div>
                  <div className="place">부산 해운대</div>
                </div>
              </div>
              <div className="more_details">
                <img className="more_img" src="/images/more.png" alt="더보기" />
              </div>
            </div>
          </div>
          <div className="img_area">
            <img
              className="feed_img"
              src="/images/my_profile.png"
              alt="피드 사진"
            />
          </div>
          {/* 피드 사진 아래 아이콘 */}
          <div className="feed_bottom">
            <div className="emoticon_box">
              <div className="emoticon_box2">
                <div className="heart_box">
                  <img className="heart" src="/images/heart.png" alt="하트" />
                </div>
                <div className="comment_box">
                  <img
                    className="coment"
                    src="/images/comment.png"
                    alt="코멘트"
                  />
                </div>
                <div className="direct_box">
                  <img
                    className="direct"
                    src="/images/direct.png"
                    alt="종이비행기"
                  />
                </div>
              </div>
              <div className="bookmark_box">
                <img
                  className="bookmark"
                  src="/images/bookmark.png"
                  alt="공유"
                />
              </div>
            </div>
          </div>

          {/* 피드 사진 아래 */}
          <div className="feed_like_box">
            <div className="feed_like_picture">
              <img
                className="feed_like_people src="
                src="/images/loopy.png"
                alt="세원"
              />
            </div>
            <p>
              z_zxxn_n
              <span className="feed_like">님 외 247명이 좋아합니다.</span>
            </p>
          </div>
          <div className="feed_article">
            <div className="feed_article_box">
              <div className="comments_container">
                <span className="who_feed">z_zxxn_n</span>
                <span className="feed_msg">
                  멀리 떠나자 야이야이야이야이 바다로~ ..
                </span>
                <div className="more_msg">더 보기</div>
              </div>
              <div className="comments1_box">
                <p className="who_comment">
                  ceohur<span className="comment_msg">어머 너무이뻐!</span>
                </p>
                <p className="who_comment">
                  Bussan.official
                  <span className="comment_msg">
                    안녕하세요! 이미지가 좋으세요^^ 디엠확인 부탁드려요~
                  </span>
                </p>
                <p className="who_comment">
                  dewrawing<span className="comment_msg">나랑도 가자~~!</span>
                </p>
              </div>
              <div className="new_comments">
                {/* <ul className="comments_list"> */}
                <li className="comments_list">
                  <div className="comments_area">
                    <span className="user_id"></span>
                    <span className="comment_contents"></span>
                  </div>
                </li>
                {/* </ul> */}
              </div>
              <div className="comments2">3시간 전</div>
            </div>
          </div>
          <div className="inputContainer">
            <div className="type_comment">
              <input
                className="inputBox"
                type="text"
                placeholder="댓글 달기..."
              />
            </div>
            <span className="buttonWrap">
              <button className="buttonBox" type="submit">
                게시
              </button>
            </span>
          </div>
        </div>
      </article>
      {/* 오른쪽 스토리부분 */}
      {/*사이드 오른쪽 부분  */}
      <section className="side-right">
        <div className="side-container" onclick="location.href='#'">
          <div className="wecode-logo"></div>
          <div className="wecode-info">
            <div className="real-wecode">
              <span>wecode_bootcamp</span>
              <p>
                WeCode<span>위코드</span>
              </p>
            </div>
          </div>
        </div>

        <div className="side-story">
          <div className="side-navigation">
            <span className="story-title">스토리</span>
            <div onclick="location.href='#'" className="see-all">
              모두 보기
            </div>
          </div>

          <div className="story" onclick="location.href='#'">
            <div className="story-img1"></div>
            <div className="story-text">
              <p className="story-text-bold">s.__.zy</p>
              <p className="story-text-color">2시간 전</p>
            </div>
          </div>

          <div className="story" onclick="location.href='#'">
            <div className="story-img2"></div>
            <div className="story-text">
              <p className="story-text-bold">s__k9211</p>
              <p className="story-text-color">33분 전</p>
            </div>
          </div>

          <div className="story" onclick="location.href='#'">
            <div className="story-img3"></div>
            <div className="story-text">
              <p className="story-text-bold">Ssoyoon</p>
              <p className="story-text-color">10시간 전</p>
            </div>
          </div>

          <div className="story" onclick="location.href='#'">
            <div className="story-img4"></div>
            <div className="story-text">
              <p className="story-text-bold">h.dina</p>
              <p className="story-text-color">20분 전</p>
            </div>
          </div>
        </div>

        {/* 추천 시작 */}
        <div className="side-recom">
          <div className="side-navigation">
            <span className="recom-title">회원님을 위한 추천</span>
            <div onclick="location.href='#'" className="see-all">
              모두 보기
            </div>
          </div>

          <div className="side-wrap">
            <div className="sidewraps">
              <div className="side-img" id="side-wrap-img1"></div>
              <div className="side-childs">
                <p className="recom-name">NewMinji</p>
                <p className="recom-info">haerin님 외 7명이 팔...</p>
              </div>
            </div>

            <button class="follow">팔로우</button>
          </div>

          <div className="side-wrap">
            <div className="sidewraps">
              <div className="side-img" id="side-wrap-img2"></div>
              <div className="side-childs">
                <p className="recom-name">chae_0.0</p>
                <p className="recom-info">Ssoyoon님 외 4명이...</p>
              </div>
            </div>

            <button class="follow">팔로우</button>
          </div>

          <div className="side-wrap">
            <div className="sidewraps">
              <div className="side-img" id="side-wrap-img3"></div>
              <div className="side-childs">
                <p className="recom-name">bbobbi</p>
                <p className="recom-info">s._.zy 외 12명이 팔로...</p>
              </div>
            </div>

            <button class="follow">팔로우</button>
          </div>
        </div>

        <div className="footer-wrapper">
          <p className="footer-content">
            Instagram 정보 · 지원 · 홍보센터 · API · <br></br>채용정보
            개인정보처리방침 · 약관 ·<br></br> 디렉터리 · 프로필 · 해시태그 ·
            언어
          </p>
          <p className="version">ⓒ 2023 INSTAGRAM</p>
        </div>
      </section>
    </main>
  );
};

export default Main;
