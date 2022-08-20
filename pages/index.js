// Next
import Head from "next/head";
import Image from "next/image";

// Firebase
import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from "firebase/analytics";

// Sections
import Hero from "../components/home/hero";
import About from "../components/home/about";
import Products from "../components/home/products";
import Contact from "../components/home/contact";
import Footer from "../components/footer";

// Styles
import styles from "../styles/Home.module.css";


const firebaseConfig = {
  apiKey: "AIzaSyDCzcYqYd4lIfSZtmHzc1SnD2QLquKu9UI",
  authDomain: "fernweh-website.firebaseapp.com",
  databaseURL: "https://fernweh-website-default-rtdb.firebaseio.com",
  projectId: "fernweh-website",
  storageBucket: "fernweh-website.appspot.com",
  messagingSenderId: "131008107454",
  appId: "1:131008107454:web:71a67723c65744e9f95fef",
  // measurementId: "G-E68591VJ3D"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// only grab the analytics if supported
const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fernweh Outfitters</title>
        <meta name="description" content="Homepage of Fernweh Outfitters" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
        <Hero />
        <About />
        <Products />
        <Contact />
      </main>
      <Footer />
      
    </div>
  );
}

// TODO: Delete original return function
// original file, kept for example
const oldHome = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};
