import Head from 'next/head';
import Image from 'next/image';
// Components
import { Navbar, Header } from 'src/views';
const Index = () => {
  return (
    <>
      <Head>
        <title>CV - Igor Dudek</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Navbar />
      <Header />
    </>
  );
};

export default Index;
