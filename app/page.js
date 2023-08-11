import styles from "../styles/page.module.css";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Footer />
    </main>
  );
}
