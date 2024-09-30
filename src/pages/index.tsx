import { type InferGetServerSidePropsType, type GetServerSideProps } from 'next'
import Image from 'next/image'
import { useMemo } from 'react'
import { Timeline } from 'react-twitter-widgets'
import useScreenSize from '@/hooks/useScreenSize'
import Swap from '@/components/Swap'
import SocialIcon, { SocialIconProps } from '@/components/SocialIcon'
import { DEX_HUNTER_PARTNER_CODE, DEX_HUNTER_PARTNER_NAME, POLICY_ID, TICKER } from '@/constants'

export const getServerSideProps = (async () => {
  const partnerName = DEX_HUNTER_PARTNER_NAME
  const partnerCode = DEX_HUNTER_PARTNER_CODE

  return { props: { partnerName, partnerCode } }
}) satisfies GetServerSideProps<{ partnerName: string; partnerCode: string }>

export type DexHunterProps = InferGetServerSidePropsType<typeof getServerSideProps>

export default function Page({ partnerName, partnerCode }: DexHunterProps) {
  const { screenWidth, screenHeight } = useScreenSize()

  const { isMobile } = useMemo(
    () => ({
      isMobile: screenWidth <= 640,
    }),
    [screenWidth]
  )

  return (
    <main>
      <div className='py-4 sm:py-8 w-screen h-screen flex flex-col items-center justify-between text-center'>
        <div>
          <h1 className='text-5xl sm:text-7xl text-[#4f866b] drop-shadow-[-1px_1px_1px_#1f3922]'>${TICKER} Huskens</h1>
          <p className='text-lg sm:text-2xl text-[#4f866b] drop-shadow-[-1px_1px_1px_#1f3922]'>The first peer reviewed meme & memecoin</p>
          <p className='text-xl sm:text-3xl text-[#4f866b] drop-shadow-[-1px_1px_1px_#1f3922]'>Funder of #1 POS (Piece of Shit) blockchain</p>

          <div className='my-4 sm:my-8 gap-4 flex flex-wrap items-center justify-center'>
            {[
              { network: 'x', url: 'https://x.com/sharlhuskens' },
              { network: 'discord', url: 'https://discord.gg/JtPqNKEjhh' },
              { network: 'instagram', url: 'https://instagram.com/sharlhuskens' },
              { network: 'tiktok', url: 'https://tiktok.com/@sharlhuskens' },
              { network: 'medium', url: 'https://sharlhuskens.medium.com' },
              { network: 'apple-music', url: 'https://music.apple.com/us/artist/sharl-huskens/1752373195' },
              { network: 'spotify', url: 'https://open.spotify.com/artist/0jQJ1k1LqNJ2vpsyeuKbtw' },
              { network: 'youtube', url: 'https://youtube.com/@SharlHusken' },
            ].map(({ network, url }) => (
              <SocialIcon
                key={url}
                network={network as unknown as SocialIconProps['network']}
                url={url}
                color='white'
                size='w-10 h-10'
                className='p-3 bg-[#4f866b]/40 hover:bg-[#4f866b]/70 rounded-full'
              />
            ))}
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <Swap partnerName={partnerName} partnerCode={partnerCode} />
          <p className='mt-4 text-sm sm:text-lg text-[#4f866b] drop-shadow-[-1px_1px_1px_#1f3922]'>{POLICY_ID}</p>
        </div>
      </div>

      <div className='fixed bottom-0 -right-[33%] sm:-right-[22%] lg:-right-[11%] -z-10 pointer-events-none'>
        <Image
          src='/media/logo/transparent.png'
          alt='sharl'
          width={2000 * (isMobile ? 0.3 : 0.35)}
          height={2000 * (isMobile ? 0.3 : 0.35)}
          priority
          unoptimized
        />
      </div>

      <div className='hidden md:block max-w-[40vw] lg:max-w-[50vw] xl:max-w-[60vw] max-h-[45vh] overflow-hidden fixed top-1/2 -translate-y-[35%] left-[1rem] xl:left-1/3 xl:-translate-x-1/2'>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'sharlhuskens',
          }}
          options={{
            width: '690',
            height: screenHeight * 0.45,
          }}
        />
      </div>
    </main>
  )
}
