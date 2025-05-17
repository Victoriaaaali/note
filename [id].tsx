import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const APP_STORE_URL = 'https://apps.apple.com/app/id6745149931';

export default function NoteFallback() {
  const { query } = useRouter();
  const { id } = query;
  const deepLink = `notely://note/${id}`;

  useEffect(() => {
    const timer = setTimeout(() => window.location.replace(APP_STORE_URL), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Open this summary in Notely</title>
        <meta name="description" content="Import this summary into Notely." />
        <meta
          name="apple-itunes-app"
          content={`app-id=6745149931, app-argument=${deepLink}`}
        />
      </Head>
      <main className="container">
        <h1>Open in Notely</h1>
        <p>
          Tap the button below to open the summary in the app.
          <br />
          If you don’t have it, you’ll be sent to the App Store.
        </p>
        <a className="cta" href={deepLink}>
          Open in Notely
        </a>
      </main>
      <style jsx>{`
        .container {
          max-width: 480px;
          margin: 15vh auto;
          text-align: center;
          font-family: system-ui, sans-serif;
        }
        .cta {
          display: inline-block;
          margin-top: 24px;
          padding: 14px 28px;
          background: #0070f3;
          color: #fff;
          border-radius: 14px;
          text-decoration: none;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}
