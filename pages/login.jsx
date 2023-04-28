import { getSession, signIn } from 'next-auth/react'
import { BsTwitter } from 'react-icons/bs'
import bgImage from "/public/bg-login-comp.png"
import Image from 'next/image'
import Head from 'next/head'

function LoginPage({ session }) {
  return (
    <div className='h-screen w-screen relative bg-black'>
      <Head>
        <title>Login</title>
        <meta property="og:title" content="Twit-Dashboard" key="login" />
      </Head>
        <Image
          src={bgImage.src}
          alt='bg'
          fill={true}
          style={{objectFit: "contain"}}
        />
      <div className='absolute bg-white max-lg:bottom-0 w-full lg:w-1/3 xl:w-1/4 lg:top-1/2 lg:right-20 lg:-translate-y-1/2 overflow-clip'>
        <div className='p-10'>
          <h1 className='text-2xl lg:text-4xl font-extrabold uppercase'>Supercharge Your Social Media Now</h1>
          <h2 className='mt-2 lg:mt-4 text-lg font-medium'>Join and discover your super power</h2>
          <div className='mt-2 lg:mt-4 flex flex-col gap-2 lg:text-lg font-medium'>
            <button className='w-full h-12 bg-black text-white'
              onClick={() => signIn('twitter')}
            >
              <p className='flex items-center justify-center gap-x-2'>
                <BsTwitter/>
                <span> Twitter</span>
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
// bg-[#1d9bf0] 
export default LoginPage

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/',
      },
    }
  }
  return {
    props: {
      session
    }
  }
}