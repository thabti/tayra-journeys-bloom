import TagManager from 'react-gtm-module';
import './../globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

const tagManagerArgs = {
    gtmId: 'G-F8XLZT0QM0',
    dataLayer: {
        'gaId': 'G-F8XLZT0QM0'
    }
}


function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        TagManager.initialize(tagManagerArgs);
    }, []);

    return (
        <>
            <Component {...pageProps} />
        </>
    );
}

export default App;
