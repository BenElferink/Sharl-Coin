import Image from 'next/image'
import { type InferGetServerSidePropsType, type GetServerSideProps } from 'next'
import { DEX_HUNTER_PARTNER_CODE, DEX_HUNTER_PARTNER_NAME, POLICY_ID, TICKER } from '@/constants'
import useScreenSize from '@/hooks/useScreenSize'
import Swap from '@/components/Swap'
import SocialIcon from '@/components/SocialIcon'
import Link from 'next/link'
import { Fragment } from 'react'

export const getServerSideProps = (async () => {
  const partnerName = DEX_HUNTER_PARTNER_NAME
  const partnerCode = DEX_HUNTER_PARTNER_CODE

  return { props: { partnerName, partnerCode } }
}) satisfies GetServerSideProps<{ partnerName: string; partnerCode: string }>

export type DexHunterProps = InferGetServerSidePropsType<typeof getServerSideProps>

export default function Page({ partnerName, partnerCode }: DexHunterProps) {
  const { screenWidth } = useScreenSize()

  const isMobile = screenWidth <= 820
  const scale = Math.max(Math.min(screenWidth / 1400, 1), 0.85)

  return (
    <main className='w-screen h-screen'>
      <div
        style={{
          width: isMobile ? '100vw' : 1600 * 0.63,
          height: isMobile ? '100vh' : 1024 * 0.63,
          padding: isMobile ? '7rem 0 0 0' : '5rem',

          display: 'flex',
          alignItems: isMobile ? 'start' : 'end',
          justifyContent: isMobile ? 'center' : 'end',

          backgroundImage: "url('/media/blackboard.png')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',

          position: isMobile ? 'relative' : 'fixed',
          top: '50%',
          right: isMobile ? 0 : 350 * scale,
          left: 'unset',
          transform: 'translate(0, -50%)',
        }}
      >
        <div className='mx-4 my-2 text-center text-white'>
          <div>
            <h1 className='text-4xl'>${TICKER} Huskensan</h1>
            <p className='text-xl'>Fiwst pewe weviewd memecoin on Cardonzo</p>
            <p className='text-2xl'>Founder of #1 PoS (Piece of Shit) blockchain</p>
          </div>

          <div className='my-4 gap-4 flex items-center justify-center'>
            <SocialIcon
              network='x'
              url='https://x.com/IOHK_Sharl'
              color='white'
              size='w-10 h-10'
              className='p-3 bg-neutral-950/30 hover:bg-neutral-950/50 rounded-full'
            />
            <SocialIcon
              network='discord'
              url='https://discord.gg/JKgRB9sx5Q'
              color='white'
              size='w-10 h-10'
              className='p-3 bg-neutral-950/30 hover:bg-neutral-950/50 rounded-full'
            />
          </div>

          <p className='my-4 text-sm'>{POLICY_ID}</p>

          <Swap partnerName={partnerName} partnerCode={partnerCode} />
        </div>
      </div>

      {isMobile ? (
        <Fragment>
          <div className='fixed bottom-10 right-40 animate-[point_0.5s_alternate_infinite]'>
            <Image src='/media/transparent/arm.png' alt='arm' width={300 * 0.65} height={208 * 0.65} priority unoptimized />
          </div>

          <div className='fixed bottom-0 right-0'>
            <Image src='/media/transparent/sharl.png' alt='sharl' width={459 * 0.65} height={492 * 0.65} priority unoptimized />
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <Link
            href='https://x.com/IOHK_Charles/status/1765109763388649609'
            target='_blank'
            rel='noopener noreferrer'
            className='hidden sm:block fixed top-20 right-6 cursor-pointer hover:scale-125 hover:rotate-12 duration-500'
          >
            <Image src='/media/wall_art.png' alt='wall_art' width={1362 * 0.2 * scale} height={1580 * 0.2 * scale} priority unoptimized />
          </Link>

          <div className='fixed bottom-10 right-60 animate-[point_0.5s_alternate_infinite]'>
            <Image src='/media/transparent/arm.png' alt='arm' width={300 * 1 * scale} height={208 * 1 * scale} priority unoptimized />
          </div>

          <div className='fixed bottom-0 right-0'>
            <Image src='/media/transparent/sharl.png' alt='sharl' width={459 * 1 * scale} height={492 * 1 * scale} priority unoptimized />
          </div>
        </Fragment>
      )}
    </main>
  )
}
