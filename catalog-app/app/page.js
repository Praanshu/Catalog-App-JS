import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by signing up to&nbsp;
          <code className={styles.code}>Catalogit</code>
        </p>
        <div>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            By Praanshu
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/Catalogit-logo.png"
          alt="Catalogit Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="./backend/google-sheets.js"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            View Catalog <span>-&gt;</span>
          </h2>
          <p>See how your customer would view your catalog.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Edit Catalog <span>-&gt;</span>
          </h2>
          <p>Modify the catagories and products and any related details.</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Orders <span>-&gt;</span>
          </h2>
          <p>View customers, details and corresponding orders.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Share <span>-&gt;</span>
          </h2>
          <p>
            Create your custom catalog and order form link and share with your customers.
          </p>
        </a>
      </div>
    </main>
  );
}
