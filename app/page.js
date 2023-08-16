import Image from "next/image";
import prevButton from "@/public/Images/prev-button.webp";
import banner1 from "@/public/Images/pen7KIN.webp";

import styles from "@/components/styles/community-63.css";

import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import IndexNewsArticles from "@/components/indexNewsArticles.jsx";
import SocialFeed from "@/components/socialFeed.jsx";

//passport
export default function Home() {
  return (
    <>
      <script
        defer
        type="text/javascript"
        src="/javascripts/jagex_form-4.js"
      ></script>
      <script
        defer
        src="/javascripts/community.js"
        type="text/javascript"
      ></script>
      <div id="Background">
        <div id="TopBackground">
          <div id="BottomBackground">
            <Header />
            <div id="bannerContainer">
              <div id="headerMask"></div>
              <div id="banner">
                <a
                  id="bannerPrevious"
                  className="HoverImg"
                  onClick="previousBanner()"
                >
                  <Image src={prevButton} alt="Previous button" />
                </a>
                <div id="bannerReel">
                  <a>
                    <Image
                      id="banner1"
                      src={banner1}
                      alt="Banner one"
                      title=""
                    />
                  </a>
                  <a>
                    <img
                      id="banner2"
                      src="https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/2012/JDvheVV.webp"
                      alt=""
                      title=""
                    />
                  </a>
                  <a>
                    <img
                      id="banner3"
                      src="https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/2012/loyalty.webp"
                      alt=""
                      title=""
                    />
                  </a>
                  <a>
                    <img
                      id="banner4"
                      src="https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/2012/WyT71yZ.webp"
                      alt=""
                      title=""
                    />
                  </a>
                  <a>
                    <img
                      id="banner5"
                      src="https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/2012/Es2xH3J.webp"
                      alt=""
                      title=""
                    />
                  </a>
                  <a>
                    <img
                      id="banner6"
                      src="https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/2012/NqBtkGF.webp"
                      alt=""
                      title=""
                    />
                  </a>
                  <a>
                    <img
                      id="banner7"
                      src="https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/2012/0aGiFuK.webp"
                      alt=""
                      title=""
                    />
                  </a>
                </div>
                <a id="bannerNext" className="HoverImg" onClick="nextBanner()">
                  <img
                    src="https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/2012/next-button.png?1"
                    alt=""
                    title=""
                  />
                </a>
              </div>
              <div id="bannerBorder"></div>
            </div>

            <div id="MainContentOuter">
              <div className="MainContentBg">
                <div className="MainContentTopBg">
                  <div className="MainContentBottomBg">
                    <div id="MainContent">
                      <div id="leftColumn">
                        <h3 className="Gradient" id="mainTitle">
                          <span className="G0">Latest News</span>
                          <span className="G1" aria-hidden="true">
                            Latest News
                          </span>
                          <span className="G2" aria-hidden="true">
                            Latest News
                          </span>
                          <span className="G3" aria-hidden="true">
                            Latest News
                          </span>
                          <span className="G4" aria-hidden="true">
                            Latest News
                          </span>
                          <span className="G5" aria-hidden="true">
                            Latest News
                          </span>
                          <span className="G6" aria-hidden="true">
                            Latest News
                          </span>
                          <span className="mask">
                            <span className="spacing">Latest News</span>
                            <span className="middleUnderscore">
                              <span className="spacing" aria-hidden="true">
                                Latest News
                              </span>
                            </span>
                          </span>
                          <span className="rightUnderscore">
                            <img
                              src="https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/2012/underscore_right.webp"
                              className="right"
                              alt=""
                            />
                            <span className="spacing" aria-hidden="true">
                              Latest News
                            </span>
                          </span>
                          <span className="leftUnderscore">
                            <img
                              src="https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/2012/underscore_flourish_left.webp"
                              className="left"
                              alt=""
                            />
                          </span>
                        </h3>
                        <a href="/news/list" className="Button Button29">
                          <span>
                            <span>
                              <span className="">
                                <b>View All News</b>
                              </span>
                            </span>
                          </span>
                        </a>
                        <IndexNewsArticles />
                      </div>
                      <div id="rightColumn">
                        <div id="social">
                          <div id="socialInner"></div>
                        </div>
                        <SocialFeed />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
