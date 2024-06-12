import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Projects from '../components/Projects';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Cameron Mirza</title>
        <meta name="description" content="Cameron Mirza's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="p-4">
        <h1 className="text-3xl font-bold">Welcome to my website!</h1>
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default Home;