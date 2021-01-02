import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>CV - Igor Dudek</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat enim
      veniam ipsum incidunt odio. Nesciunt minima modi, aperiam quas id iusto
      velit, delectus quae animi molestiae, ipsa ratione quam eum?
      {/* <Image
        src='/my_photo.jpeg'
        alt='Picture of the author'
        width={400}
        height={500}
      /> */}
    </div>
  );
}
