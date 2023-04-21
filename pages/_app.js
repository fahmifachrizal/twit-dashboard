import SideBar from '@/components/Sidebar'
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      {
        pageProps.session ? 
        <div className='flex'>
          <SideBar/>
          <Component {...pageProps} />
        </div>
        :
        <div className='flex'>
          <Component {...pageProps} />
        </div>
      }
    </SessionProvider>
  )
}
