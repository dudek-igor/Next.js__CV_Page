import Head from 'next/head';
import Image from 'next/image';
// Components
import { UpButton } from 'src/components';
// Views
import { Navbar, Header, AboutMe, Skills, Porfolio, Contact } from 'src/views';
const Index = () => {
  return (
    <>
      <Head>
        <title>CV - Igor Dudek</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Navbar />
      <Header />
      <AboutMe />
      <Skills />
      <Porfolio />
      <Contact />
      <UpButton />
    </>
  );
};

export default Index;
