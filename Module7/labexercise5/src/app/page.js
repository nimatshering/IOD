import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p>Hello World</p>
      </main>
      <footer className={styles.footer}>
        <p>Copyright@2025</p>
      </footer>
    </div>
  );
}
