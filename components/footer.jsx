export default function Footer() {
  return (
    <div id="Footer" className="Kingthings">
      <ul className="Main">
        <li>
          <a>Development</a>
          <ul className="Sub">
            <li>
              <a href="https://gitlab.com/groups/darkanrs/-/wikis/home">
                Development Documentation
              </a>
            </li>
            <li>
              <a href="https://gitlab.com/darkanrs">GitLab</a>
            </li>
            <li>
              <a href="https://github.com/DarkanRS">GitHub</a>
            </li>
          </ul>
        </li>
        <li>
          <a>Support</a>
          <ul className="Sub">
            <li>
              <a href="https://discord.com/invite/RWZt5YN7H4">
                Customer Support
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a>Game</a>
          <ul className="Sub">
            <li>
              <a href="/world">The World</a>
            </li>
            <li>
              <a href="https://runescape.wiki/">RuneScape Wiki</a>
            </li>
          </ul>
        </li>
        <li>
          <a>Community</a>
          <ul className="Sub">
            <li>
              <a href="https://discord.com/invite/RWZt5YN7H4">Discord</a>
            </li>
            <li>
              <a href="/highscores">Hiscores</a>
            </li>
            <li>
              <a href="/downloads">Downloads</a>
            </li>
          </ul>
        </li>
      </ul>
      <h2 id="RuneScapeLogo">
        <a href="/">
          <img
            src="https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/2012/runescape.webp"
            alt="RuneScape"
            title=""
          />
        </a>
      </h2>
    </div>
  );
}
