import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const zeroTalentList = [
    'Being On Time',
    'Making An Effort',
    'Being High Energy',
    'Having A Positive Attitude',
    'Being Passionate',
    'Using Good Body Language',
    'Being Coachable',
    'Doing A Little Extra',
    'Being Prepared',
    'Having A Strong Work Ethic',
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Jovi Sicat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img
          src="/images/jovpic.jpg"
          alt="Jovi Sicat"
          className={styles.profile}
        />

        <h1 className={styles.name}>Jovi Sicat</h1>

        <div className={styles.description}>
          <h2>10 Things That Require Zero Talent</h2>
          <ul>
            {zeroTalentList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a
            href="https://nextjs.org/learn"
            target="_blank"
            rel="noopener noreferrer"
          >
            our Next.js tutorial
          </a>
          .)
        </p>
      </main>
    </div>
  );
}