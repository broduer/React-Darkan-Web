import auth from "../auth.json";
export async function getArticles(type = 0, page = 1) {
  const articles = await fetch(
    auth.webAPI + `web?page=${page}&limit=6&type=${type}`
  );
  return await articles.json();
}

export function formatDate(date) {
  let pastDate = new Date(date);
  let nowDate = new Date();
  const diffTime = Math.abs(nowDate - pastDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  if (diffDays <= 21) return diffDays + " days ago";
  return new Date(date).toDateString();
}

export function collapseIfNotFirstArticle(index) {
  if (index == 0) return "";
  return "ArticleCollapsed";
}
