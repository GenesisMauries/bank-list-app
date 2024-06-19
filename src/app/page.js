
import Banks from "./banks/banks";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banks/>
    </main>
  );
}
