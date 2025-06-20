import styles from "../page.module.css";

export default function Profile() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className="About">
          <h1>Profile</h1>
          <p>This is the profile page</p>
        </div>
      </main>
      <footer className={styles.footer}>copyright@2025</footer>
    </div>
  );
}
