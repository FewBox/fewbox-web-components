import React from 'react';
import '../src/theme/_fewbox-default.scss';
import '@fewbox/react-components/dist/fewbox-base.min.css';

export default function FewBoxApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}