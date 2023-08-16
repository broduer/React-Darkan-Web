import getPlayerCount from "@/lib/getPlayerCount";

export default function Header() {
  let playerCount = 77;
  return (
    <>
      <div id="HeaderBg">
        <div id="HeaderLeft">
          <div id="HeaderLeftInner"></div>
        </div>
        <div id="HeaderCentre"></div>
        <div id="HeaderRight">
          <div id="HeaderRightInner"></div>
        </div>
      </div>
      <div id="Header">
        <a href="/" id="HeaderLogo">
          <img
            src="https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/2012/runescape.webp"
            alt="RuneScape"
            title=""
          />
        </a>
        <div id="Nav">
          <nav>
            <ul className="MainMenu">
              <li className="News">
                <a className="HoverImg" href="/news/list">
                  <img
                    src="https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/2012/News.webp"
                    alt="News"
                    title=""
                  />
                </a>
              </li>
              <li className="TheGame CSS3">
                <a className="HoverImg" href="">
                  <img
                    src="https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/2012/GameInfo.webp"
                    alt="Game Info"
                    title=""
                  />
                </a>
                <div className="Mask"></div>
                <div className="DropDown Kingthings">
                  <div>
                    <ul>
                      <li>
                        <a href="/downloads">Download</a>
                      </li>
                      <li>
                        <a href="/world">The World</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="Community CSS3">
                <a className="HoverImg" href="/highscores">
                  <img
                    src="https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/2012/Community.webp"
                    alt="Community"
                    title=""
                  />
                </a>
                <div className="Mask"></div>
                <div className="DropDown Kingthings">
                  <div>
                    <ul>
                      <li>
                        <a href="https://discord.gg/RWZt5YN7H4">Discord</a>
                      </li>
                      <li>
                        <a href="/highscores">Hiscores</a>
                      </li>
                      <li>
                        <a href="/hall-of-heroes">Hall Of Heroes</a>
                      </li>
                      <li>
                        <a href="/temporal-highscores">XP Tracker</a>
                      </li>
                      <li>
                        <a href="/temporal-hall-of-heroes">XP Heroes</a>
                      </li>
                      <li>
                        <a href="/grandexchange">Grand Exchange</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="Forum">
                <a className="HoverImg" href="https://discord.gg/RWZt5YN7H4">
                  <img
                    src="https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/2012/Forum.webp"
                    alt="Forum"
                    title=""
                  />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="Login" className="">
          <a className="LoginX LoginXtop"></a>
          <div className="LoginXbottom"></div>
          <a
            href="https://github.com/DarkanRS/client-loader/releases/download/1.0.1/DarkanSetup.msi"
            download
            className="Button Button29"
            id="LoginButton1"
          >
            <span>
              <span>
                <span className="">
                  <b>Windows</b>
                </span>
              </span>
            </span>
          </a>
          <a
            href="https://gitlab.com/darkanrs/client-loader/-/releases"
            className="Button Button29"
            id="RegisterButton"
          >
            <span>
              <span>
                <span className="">
                  <b>Mac/Linux</b>
                </span>
              </span>
            </span>
          </a>
          <div id="LoginMask"></div>
          <div id="LoginPanel">
            <p id="Or1">or&nbsp;</p>
            <p id="GetAccess">Get access and start playing free!</p>
            <p id="Or2">or</p>
          </div>
          <a
            href="/downloads"
            id="PlayNowFree"
            className="HoverImgCss3Js GameLink"
          >
            <img
              src="https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/2012/PlayFreeNow.webp"
              alt="Play Free Now"
            />
          </a>
        </div>
        <div id="SearchPanel">
          <form onClick="window.location = 'https://runescape.wiki/'">
            <a href="https://runescape.wiki/">
              <span className="Button Button29" id="SearchButton">
                <span>
                  <span>
                    <span className="">
                      <b>Find</b>
                    </span>
                    <input name="" />
                  </span>
                </span>
              </span>
              <input
                type="text"
                id="Search"
                name="text"
                title="Search the RuneScape Wiki"
                className="placeholder"
              />
            </a>
          </form>
        </div>
        <div id="PlayerCount">
          <p className="top">
            <span>{playerCount.count}</span> people currently online
          </p>
          <p className="bottom">
            <span>{playerCount.count}</span> people currently online
          </p>
        </div>
      </div>
    </>
  );
}
