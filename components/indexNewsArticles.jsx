import {
  getArticles,
  collapseIfNotFirstArticle,
  formatDate,
} from "@/lib/getArticles.js";
import UpdateIcon from "./news/updateIcon";

export default async function IndexNewsArticles() {
  const articles = await getArticles();

  return (
    <div id="NewsArticles">
      {articles.map((article, index) => {
        return (
          <div
            class={"Article " + collapseIfNotFirstArticle(index)}
            key={article.id}
          >
            <div>
              <div class="NewsHeaderImage">
                <img
                  src="https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/2012/NoImage.webp"
                  alt=""
                  title=""
                />
                <div></div>
              </div>
              <a class="ArticleControl HoverImg ControlMinus">
                <img
                  src="https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/2012/Minus.webp"
                  alt="Close"
                  title="Close"
                />
              </a>
              <a class="ArticleControl HoverImg ControlPlus">
                <img
                  src="https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/2012/Plus.webp"
                  alt="Open"
                  title="Open"
                />
              </a>
              <div class="CollapsedMask"></div>
              <UpdateIcon type={article.type} />
              <div class="Title">
                <a href={"news/" + article.slug}>
                  <h4 class="FlatHeader">{article.title}</h4>
                </a>
                <br style={{ clear: "both" }} />
                <span>{formatDate(article.createdAt)}</span>
              </div>
              <div class="Content">{article.description}</div>
              <a class="HoverImg More" href={"news/" + article.slug}>
                <img
                  src="https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/2012/ReadMore.webp"
                  alt=""
                  title=""
                />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
