import { Analytics } from '@vercel/analytics/react';
import './../globals.css'; // Assuming this is where your global styles are
import type { AppProps } from 'next/app'; // Correct import

// Wrap your app with the Analytics component
function App({ Component, pageProps }: AppProps) {
  return (
    <> <Component {...pageProps} /> <Analytics /></>
    );
}

export default App;