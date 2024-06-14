import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Projects from "../components/Projects";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Cameron Mirza</title>
        <meta name="description" content="Cameron Mirza Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="p-4 flex flex-col items-center">
        <div className="max-w-xl w-full">
          <section className="mb-8">
            <p>
              Hey there! I'm Cameron, a software developer based in Portland
              Oregon. When I'm not in front of a computer, I enjoy reading,
              music, art, and hiking.
            </p>
          </section>
          <Projects />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
