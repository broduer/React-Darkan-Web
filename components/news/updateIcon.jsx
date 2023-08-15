export default function UpdateIcon({ type }) {
  if (type == 1)
    return (
      <img
        src="https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/2012/Cat_1.webp"
        alt="Game Updates"
        title="Game Updates"
        class="Category"
      ></img>
    );
  if (type == 2)
    return (
      <img
        src="https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/2012/Cat_2.webp"
        alt="Web/API Updates"
        title="Web/API Updates"
        class="Category"
      ></img>
    );
  if (type == 3)
    return (
      <img
        src="https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/2012/Cat_3.webp"
        alt="Community Updates"
        title="Community Updates"
        class="Category"
      ></img>
    );
  if (type == 4)
    return (
      <img
        src="https://raw.githubusercontent.com/JesseGuerrero/web-files-darkan/master/2012/Cat_4.webp"
        alt="Engine Updates"
        title="Engine Updates"
        class="Category"
      ></img>
    );
}
