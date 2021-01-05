import Head from 'next/head';
import Image from 'next/image';
// Components
import { UpButton } from 'src/components';
// Views
import {
  Navbar,
  Header,
  AboutMe,
  Skills,
  Experience,
  Contact,
} from 'src/views';
const Index = () => {
  return (
    <>
      <Head>
        <title>CV - Igor Dudek</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Header />
      <AboutMe />
      <Skills />
      <Experience />
      <Contact />
      <UpButton />
    </>
  );
};

export default Index;
