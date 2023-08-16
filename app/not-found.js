import styles from "@/components/styles/404.css";
import Image from "next/image";
import Image404 from "@/public/Images/Background404WText.jpg";

export default function Custom404() {
  return (
    <div id="background404">
      <div id="centered404">
        <Image src={Image404} alt="Page not found" />
      </div>
    </div>
  );
}
