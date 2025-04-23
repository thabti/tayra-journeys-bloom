import { GoogleAnalytics } from '@next/third-parties/google';

import './../globals.css'; // Assuming this is where your global styles are
import type { AppProps } from 'next/app'; // Correct import

// Wrap your app with the Analytics component
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleAnalytics gaId="G-F8XLZT0QM0" />
    </>
  );
}

export default App;