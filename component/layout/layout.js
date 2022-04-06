import Head from 'next/head';
import styles from './layout.module.css';
import Footer from './footer';
import Navbar from './navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>menuisier</title>
        <meta
          name="description"
          content="Bringing high quality, hand crafted chairs to your living space."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className={styles.main}>{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
