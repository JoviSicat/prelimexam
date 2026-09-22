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

      <main className={styles.main} style={{ padding: '2rem 1rem', maxWidth: '36rem', margin: '0 auto' }}>
        {/* Profile Picture */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <img
            src="/images/jovpic.jpg"
            alt="Jovi Sicat"
            style={{
              width: '130px',
              height: '130px',
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
          <h1 style={{ fontSize: '2.2rem', fontWeight: '800', marginTop: '1rem', marginBottom: '1.5rem', textAlign: 'center' }}>
            Jovi Sicat
          </h1>
        </div>

        {/* List Section */}
        <div style={{ textAlign: 'left', width: '100%' }}>
          <p style={{ fontSize: '1.1rem', fontWeight: '500', marginBottom: '1.25rem' }}>
            10 Things That Require Zero Talent
          </p>

          <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.9', fontSize: '1rem', marginBottom: '2rem' }}>
            {zeroTalentList.map((item, index) => (
              <li key={index} style={{ marginBottom: '0.2rem' }}>
                {item}
              </li>
            ))}
          </ul>

          {/* Footer Text */}
          <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: '1.5' }}>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a
              href="https://nextjs.org/learn"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#0070f3', textDecoration: 'none' }}
            >
              our Next.js tutorial
            </a>
            .)
          </p>
        </div>
      </main>
    </div>
  );
}
