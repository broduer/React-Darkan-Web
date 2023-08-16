import Header from "../../../../../components/header.jsx";
import Footer from "../../../../../components/footer.jsx";
import ListingNewsArticles from "@/components/listingNewsArticles";
import SocialFeedNewsListing from "@/components/news/socialFeedNewsListing.jsx";
import FilterNewsBar from "@/components/news/filterNewsBar.jsx";

export default function NewsListing({ params }) {
  return (
    <>
      <link defer href="/styles/news-50.css" rel="stylesheet" />
      <link defer href="/styles/article-50.css" rel="stylesheet" />
      <div id="Background">
        <div id="TopBackground">
          <div id="BottomBackground">
            <Header />
            <div id="MainContentOuter">
              <div class="MainContentBg">
                <div class="MainContentTopBg">
                  <div class="MainContentBottomBg">
                    <div id="MainContent">
                      <div id="MainTitle">
                        <div class="Centre1">
                          <div class="Centre2">
                            <h3 class="Gradient DoubleFlourish">
                              <span class="spacing" aria-hidden="true">
                                News
                              </span>
                              <span class="G0">News</span>
                              <span class="G1" aria-hidden="true">
                                News
                              </span>
                              <span class="G2" aria-hidden="true">
                                News
                              </span>
                              <span class="G3" aria-hidden="true">
                                News
                              </span>
                              <span class="G4" aria-hidden="true">
                                News
                              </span>
                              <span class="G5" aria-hidden="true">
                                News
                              </span>
                              <span class="G6" aria-hidden="true">
                                News
                              </span>
                              <span class="mask">
                                <span class="spacing" aria-hidden="true">
                                  News
                                </span>
                                <span class="leftInnerFlourish"></span>
                                <span class="centreFlourish"></span>
                                <span class="rightInnerFlourish"></span>
                              </span>
                              <span class="rightUnderscore">
                                <img
                                  src="https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/2012/flourish_outer_right.webp"
                                  class="right"
                                  alt=""
                                />
                                <span class="spacing" aria-hidden="true">
                                  News
                                </span>
                              </span>
                              <span class="leftUnderscore">
                                <img
                                  src="https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/2012/flourish_outer_left.webp"
                                  class="left"
                                  alt=""
                                />
                              </span>
                            </h3>
                          </div>
                        </div>
                      </div>
                      {/* <FilterNewsBar type={type} /> */}
                      <SocialFeedNewsListing />
                      {/* <ListingNewsArticles type={type} page={page} />  */}
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
