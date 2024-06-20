
import Banks from "./banks/banks";
import Header from "./components/header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <Banks/>
    </main>
  );
}
