import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Next</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 >
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </main>
    </div>
  )
}
