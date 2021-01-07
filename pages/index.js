import Head from 'next/head';
import { NextSeo } from 'next-seo';

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
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NextSeo
        title='CV - Igor Dudek'
        description='Igor Dudek - CV Page, Future Fullstack JavaScript Developer'
      />
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
