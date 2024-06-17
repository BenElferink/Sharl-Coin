import DexHunterSwap from '@dexhunterio/swaps'
import '@dexhunterio/swaps/lib/assets/style.css'
import useMount from '@/hooks/useMount'
import { type DexHunterProps } from '@/pages'
import { TOKEN_ID } from '@/constants'

const Swap = ({ partnerName, partnerCode }: DexHunterProps) => {
  const { isMounted } = useMount()

  if (!isMounted) return null

  //   return (
  //     <DexHunterSwap
  //       partnerName={partnerName}
  //       partnerCode={partnerCode}
  //       orderTypes={['SWAP', 'LIMIT', 'DCA']}
  //       displayType='DEFAULT'
  //       theme='light'
  //       defaultToken={TOKEN_ID}
  //       // @ts-ignore
  //       supportedTokens={[TOKEN_ID]}
  //       defaultSettings={{ slippage: 5 }}
  //       buttonText='SWAP'
  //     />
  //   )

  return (
    <DexHunterSwap
      partnerName={partnerName}
      partnerCode={partnerCode}
      orderTypes={['SWAP', 'LIMIT', 'DCA']}
      displayType='BUTTON'
      colors={{
        // @ts-ignore
        background: 'rgb(255, 255, 255)',
        // @ts-ignore
        containers: 'rgba(var(--accent-rgb), 0.15)',
        subText: '#88919E',
        mainText: '#000',
        buttonText: '#FFF',
        // @ts-ignore
        accent: 'rgb(var(--accent-rgb))',
      }}
      defaultToken={TOKEN_ID}
      // @ts-ignore
      supportedTokens={[TOKEN_ID]}
      defaultSettings={{ slippage: 5 }}
      buttonText='SWAP'
      buttonClassName='max-w-40 w-40'
      className='cursor-pointer select-none transition-all duration-150 text-white font-bold text-lg bg-[rgb(var(--accent-rgb))] rounded-full border border-[rgb(var(--accent-light-rgb))] [box-shadow:0_7px_0_0_rgb(var(--accent-dark-rgb)),0_12px_0_0_rgba(var(--accent-dark-rgb),0.2)] active:translate-y-2 active:[box-shadow:0_0px_0_0_rgb(var(--accent-dark-rgb)),0_0px_0_0_rgba(var(--accent-dark-rgb),0.2)] active:border-b-[0px]'
    />
  )
}

export default Swap
