import UpdateIcon from "./news/updateIcon";

import getArticles from "@/lib/getArticles.js";

export default async function IndexNewsArticles() {
  const articles = await getArticles();

  function formatDate(date) {
    let pastDate = new Date(date);
    let nowDate = new Date();
    const diffTime = Math.abs(nowDate - pastDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays <= 21) return diffDays + " days ago";
    return new Date(date).toDateString();
  }

  function collapseIfNotFirstArticle(index) {
    if (index == 0) return "";
    return "ArticleCollapsed";
  }

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
