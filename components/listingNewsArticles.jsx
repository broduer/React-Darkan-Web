import {
  getArticles,
  collapseIfNotFirstArticle,
  formatDate,
} from "@/lib/getArticles.js";
import UpdateIcon from "./news/updateIcon";

export default async function ListingNewsArticles({ type, page }) {
  const articles = await getArticles(type, page);
  return (
    <>
      <div id="NewsArticles">
        {articles.map((article) => {
          return (
            <div class="Article" key={article.id}>
              <div>
                <div class="NewsHeaderImage">
                  <img
                    src="https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/2012/NoImage.webp"
                    alt=""
                    title=""
                  />
                  <div></div>
                </div>
                <UpdateIcon />
                <div class="Title">
                  <a href={"/news/" + article.title}>
                    <h4 class="FlatHeader">{article.title}</h4>
                  </a>
                  <br style="clear:both" />
                  <span>{formatDate(article.createdAt)}</span>
                </div>
                <div class="Content">{article.description}</div>
                <a class="More HoverImgJs" href={"/news/" + article.title}>
                  <img
                    src="https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/2012/ReadMore.webp"
                    alt=""
                    title=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/2012/ReadMore.webp"
                    className="HoverImgJsFg"
                  />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <style>
        {`.PageControl .PageInput input {
      border: "none",
      background: "none",
      height: "22px",
      font-size: "20px",
      color: "#f3b13f",
      margin-top: "5px",
      font-family: "KingthingsPetrockRegular, Times New Roman, serif",
      width: "50px",
      text-align: "center",
      background-image: url("https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/2012/Input_bg_big.png");
  }`}
      </style>
    </>
  );
}
