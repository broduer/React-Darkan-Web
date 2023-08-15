import auth from "../auth.json";
export default async function getPlayerCount() {
  let playerCount = await fetch(auth.webAPI + "players/online-count");
  return await playerCount.json();
}
