import styles from "../page.module.css";
import Link from "next/link";

export default function About() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className="About">
          <h1>About</h1>
          <p>
            This is the about page. Nothing to see, go
            <Link href="/">home</Link>.
          </p>
        </div>
      </main>
      <footer className={styles.footer}>copyright@2025</footer>
    </div>
  );
}
