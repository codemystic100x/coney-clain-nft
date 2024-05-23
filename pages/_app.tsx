import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { Sepolia } from '@thirdweb-dev/chains';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={Sepolia}
      clientId='817b130105e21ad61227af5b08fa50af'
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
