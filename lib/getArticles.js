import auth from "../auth.json";
export default async function getArticles() {
  const articles = await fetch(auth.webAPI + "web?page=1&limit=6&type=0");
  return await articles.json();
}
