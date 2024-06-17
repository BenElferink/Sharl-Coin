import Image from 'next/image'
import { type InferGetServerSidePropsType, type GetServerSideProps } from 'next'
import { useMemo } from 'react'
import { DEX_HUNTER_PARTNER_CODE, DEX_HUNTER_PARTNER_NAME, POLICY_ID, TICKER } from '@/constants'
import useScreenSize from '@/hooks/useScreenSize'
import Swap from '@/components/Swap'
import SocialIcon from '@/components/SocialIcon'

export const getServerSideProps = (async () => {
  const partnerName = DEX_HUNTER_PARTNER_NAME
  const partnerCode = DEX_HUNTER_PARTNER_CODE

  return { props: { partnerName, partnerCode } }
}) satisfies GetServerSideProps<{ partnerName: string; partnerCode: string }>

export type DexHunterProps = InferGetServerSidePropsType<typeof getServerSideProps>

export default function Page({ partnerName, partnerCode }: DexHunterProps) {
  const { screenWidth } = useScreenSize()

  const { isMobile, scale } = useMemo(
    () => ({
      isMobile: screenWidth <= 640,
      scale: Math.max(Math.min(screenWidth / 1400, 1), 0.85),
    }),
    [screenWidth]
  )

  return (
    <main className='w-screen h-screen flex items-center justify-center'>
      <div
        className='flex flex-col sm:flex-row items-center justify-between sm:justify-center text-center'
        style={{
          width: isMobile ? '100vw' : 600 * 1.3,
          height: isMobile ? '100vh' : 372 * 1.3,
          padding: isMobile ? '1rem 0.5rem' : '5rem',
          marginBottom: isMobile ? '0' : '15vh',

          backgroundImage: isMobile ? 'none' : "url('/media/blackboard.png')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div>
          <h1 className='text-4xl'>${TICKER} Huskens</h1>
          <p className='text-xl'>The first peer reviewed meme & memecoin</p>
          <p className='text-2xl'>Funder of #1 POS (Piece of Shit) blockchain</p>

          <div className='my-4 sm:my-8 gap-4 flex flex-wrap items-center justify-center'>
            <SocialIcon
              network='x'
              url='https://x.com/sharlhuskens'
              color='white'
              size='w-10 h-10'
              className='p-3 bg-neutral-950/30 hover:bg-neutral-950/50 sm:bg-yellow-300/30 sm:hover:bg-yellow-300/50 rounded-full'
            />
            <SocialIcon
              network='discord'
              url='https://discord.gg/JtPqNKEjhh'
              color='white'
              size='w-10 h-10'
              className='p-3 bg-neutral-950/30 hover:bg-neutral-950/50 sm:bg-yellow-300/30 sm:hover:bg-yellow-300/50 rounded-full'
            />
            <SocialIcon
              network='instagram'
              url='https://www.instagram.com/sharlhuskens'
              color='white'
              size='w-10 h-10'
              className='p-3 bg-neutral-950/30 hover:bg-neutral-950/50 sm:bg-yellow-300/30 sm:hover:bg-yellow-300/50 rounded-full'
            />
            <SocialIcon
              network='youtube'
              url='https://www.youtube.com/@SharlHusken'
              color='white'
              size='w-10 h-10'
              className='p-3 bg-neutral-950/30 hover:bg-neutral-950/50 sm:bg-yellow-300/30 sm:hover:bg-yellow-300/50 rounded-full'
            />
            <SocialIcon
              network='tiktok'
              url='https://www.tiktok.com/@sharlhuskens'
              color='white'
              size='w-10 h-10'
              className='p-3 bg-neutral-950/30 hover:bg-neutral-950/50 sm:bg-yellow-300/30 sm:hover:bg-yellow-300/50 rounded-full'
            />
            <SocialIcon
              network='medium'
              url='https://sharlhuskens.medium.com'
              color='white'
              size='w-10 h-10'
              className='p-3 bg-neutral-950/30 hover:bg-neutral-950/50 sm:bg-yellow-300/30 sm:hover:bg-yellow-300/50 rounded-full'
            />
          </div>
        </div>

        <div>
          {!isMobile ? <p className='my-2 text-sm'>{POLICY_ID}</p> : null}
          <Swap partnerName={partnerName} partnerCode={partnerCode} />
          {isMobile ? <p className='my-2 text-sm'>{POLICY_ID}</p> : null}
        </div>
      </div>

      <div className='fixed bottom-0 -right-[33%] sm:right-0 -z-10 sm:z-0 pointer-events-none'>
        <Image
          src='/media/transparent/logo.png'
          alt='sharl'
          width={2000 * (isMobile ? 0.3 : 0.35) * scale}
          height={2000 * (isMobile ? 0.3 : 0.35) * scale}
          priority
          unoptimized
        />
      </div>
    </main>
  )
}
