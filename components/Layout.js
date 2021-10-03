import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
