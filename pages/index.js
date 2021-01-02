import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CV - Igor Dudek</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* <Image
        src='/my_photo.jpeg'
        alt='Picture of the author'
        width={400}
        height={500}
      /> */}
    </div>
  );
}
