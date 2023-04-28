import { getSession } from 'next-auth/react'
import { useEffect, useState } from 'react';
import { BsAt, BsChatLeftDotsFill, BsFillHeartFill, BsFillPersonCheckFill, BsFillPersonLinesFill, BsGlobe2, BsTwitter } from 'react-icons/bs';
import Header from '@/components/Header'
import BarGraph from '@/components/widgets/BarGraph';
import LineGraph from '@/components/widgets/LineGraph';
import AreaGraph from '@/components/widgets/AreaGraph';
import HeatMap from '@/components/widgets/HeatMap';
import Head from 'next/head';

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/login',
      },
    }
  }
  return {
    props: {
      session
    }
  }
}

function OverviewPage({ session, following }) { 
  const [followNASA, setFollowNASA] = useState(false);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true)
  
  async function getFollowing() {
    const results = await fetch('/api/twitter/following')
    const { following } = await results.json();
    setFollowNASA(following);
  }

  async function follow(targetUser) {
    const results = await fetch('/api/twitter/follow',{
      method: 'POST',
      body: targetUser
    })
    const { following } = await results.json();
    if (targetUser == 'NASA'){
      setFollowNASA(following);
    }
  }

  async function getUserStats() {
    const result = await fetch('/api/twitter/user')
    const { user } = await result.json()
    setUser(user)
    setLoading(false)
  }
  
  useEffect(() => {
    getFollowing()
    getUserStats()
  },[])

  return (
    <div className='w-full min-h-screen py-10 px-16 flex flex-col bg-gray-200'>
      <Head>
        <title>Twit-Dashboard</title>
        <meta property="og:title" content="Twit-Dashboard" key="title" />
      </Head>
      <div>
        <Header user={session.user} title={'Overview'} subtitle={'Take a closer look on how your social media accounts are performing'}/>
      </div>
      <div className='w-full h-fullflex-1 flex flex-col gap-y-4'>
      
      {/* Requirement */}
      <div className='flex flex-col gap-y-4'>
        <h2 className='text-2xl font-semibold'>Most Important Things</h2>
        <div className='flex flex-wrap gap-4'>
            {/* Nasa Follow Status */}
            <div className='h-64 w-64 bg-white p-4 rounded-xl hover:ring hover:ring-blue-500 group'>
                {
                  loading ?
                  '':
                  <div className='h-full w-full flex flex-col'>
                    <h3 className='text-lg font-semibold pb-2'>{followNASA?`That's Great You Are Following NASA`:`Why are you not following NASA? Are you...`}</h3>
                    <div className='flex-1 relative overflow-clip rounded-xl'>
                      <img src="https://pbs.twimg.com/profile_banners/11348282/1679344008/1500x500" alt="NASA" className='object-none h-full w-full rounded-xl group-hover:scale-150 duration-500 group-hover:rotate-12'/>
                      <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-y-2'>
                        <img src="https://pbs.twimg.com/profile_images/1321163587679784960/0ZxKlEKB_400x400.jpg" alt="NASA" className=' w-16 h-16 bg-white rounded-lg p-1'/>
                        <button className={`text-xs text-gray-800 bg-white ${followNASA?'':'hover:bg-[#03a9f4] hover:text-white'}  font-medium rounded-full px-2 py-1`} disabled={followNASA}
                          onClick={()=>{follow('NASA')}}
                        >
                          Follow{followNASA&&'ing'}
                        </button>
                      </div>
                    </div>
                  </div>  
                }
            </div>
          </div>
        </div>

      {/* Requirement */}
      <div className='flex flex-col gap-y-4'>
        <h2 className='text-2xl font-semibold'>Twitter Metrics</h2>
        <div className='flex flex-wrap gap-4'>
          <div className='w-full flex flex-wrap gap-4'>
            <div className='h-24 w-56 bg-white hover:bg-[#03a9f4] hover:text-white rounded-xl hover:ring hover:ring-blue-500 flex items-center justify-center p-4 gap-x-2 cursor-default'>
              {
                loading ? '' :
                <>
                  <div>
                    <p className='text-xl font-semibold flex items-center'><BsAt />{user.screen_name}</p>
                    <p className='font-medium'>{user.name}</p>
                  </div>
                </>
              }
            </div>

            <div className='h-24 w-56 bg-white hover:bg-[#03a9f4] hover:text-white rounded-xl hover:ring hover:ring-blue-500 flex items-center justify-center p-4 gap-x-4 cursor-default'>
              {
                loading ? '' :
                <>
                  <BsFillPersonCheckFill className='text-4xl'/>
                  <div>
                    <p className='text-xl font-semibold'>{user.friends_count.toLocaleString()}</p>
                    <p className='font-medium'>Following</p>
                  </div>
                </>
              }
            </div>

            <div className='h-24 w-56 bg-white hover:bg-[#03a9f4] hover:text-white rounded-xl hover:ring hover:ring-blue-500 flex items-center justify-center p-4 gap-x-4 cursor-default'>
              {
                loading ? '' :
                <>
                  <BsFillPersonLinesFill className='text-4xl'/>
                  <div>
                    <p className='text-xl font-semibold'>{user.followers_count.toLocaleString()}</p>
                    <p className='font-medium'>Followers</p>
                  </div>
                </>
              }
            </div>

            <div className='h-24 w-56 bg-white hover:bg-[#03a9f4] hover:text-white rounded-xl hover:ring hover:ring-blue-500 flex items-center justify-center p-4 gap-x-4 cursor-default'>
              {
                loading ? '' :
                <>
                  <BsChatLeftDotsFill className='text-4xl'/>
                  <div>
                    <p className='text-xl font-semibold'>{user.statuses_count.toLocaleString()}</p>
                    <p className='font-medium'>Tweets</p>
                  </div>
                </>
              }
            </div>


            <div className='h-24 w-56 bg-white hover:bg-[#03a9f4] hover:text-white rounded-xl hover:ring hover:ring-blue-500 flex items-center justify-center p-4 gap-x-4 cursor-default'>
              {
                loading ? '' :
                <>
                  <BsFillHeartFill className='text-4xl'/>
                  <div>
                    <p className='text-xl font-semibold'>{user.favourites_count.toLocaleString()}</p>
                    <p className='font-medium'>Favorites</p>
                  </div>
                </>
              }
            </div>

            <div className='h-24 w-56 bg-white hover:bg-[#03a9f4] hover:text-white rounded-xl hover:ring hover:ring-blue-500 flex items-center justify-center p-4 gap-x-4 cursor-default'>
              {
                loading ? '' :
                <>
                  <BsGlobe2 className='text-4xl'/>
                  <div>
                    <p className='text-xl font-semibold'>{(user.favourites_count+user.statuses_count+user.followers_count+user.friends_count).toLocaleString()}</p>
                    <p className='font-medium'>Engagement</p>
                  </div>
                </>
              }
            </div>

          </div>

          {/* Bar Graph */}
          <div className='h-64 w-96 bg-white p-4 rounded-xl hover:ring hover:ring-blue-500 group'>
            <div className='h-full w-full flex flex-col'>
              <h3 className='text-lg font-semibold pb-2'>New Following vs Followers</h3>
              <BarGraph />
            </div>
          </div>

          {/* Line Graph */}
          <div className='h-64 w-64 bg-white p-4 rounded-xl hover:ring hover:ring-blue-500 group'>
            <div className='h-full w-full flex flex-col'>
              <h3 className='text-lg font-semibold pb-2'>Account Growth</h3>
              {/* <BarGraph /> */}
              <LineGraph />
            </div>
          </div>

          {/* Area Graph */}
          <div className='h-64 w-96 bg-white p-4 rounded-xl hover:ring hover:ring-blue-500 group'>
            <div className=' flex flex-col'>
              <h3 className='text-lg font-semibold pb-2'>Active Hours (Milions Tweet)</h3>
              <AreaGraph />
            </div>
          </div>

          {/* HeatMap */}
          <div className='h-64 w-96 bg-white p-4 rounded-xl hover:ring hover:ring-blue-500 group'>
            <div className=' flex flex-col'>
              <h3 className='text-lg font-semibold pb-2'>Engagement Rate</h3>
              <HeatMap />
            </div>
          </div>


        </div>
      </div>
    </div>
    </div>
  )
}

export default OverviewPage