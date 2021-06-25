import '../styles/globals.css';
import type { AppProps } from 'next/app';

import 'stylesheets/all.scss';
import 'stylesheets/header.scss';
import Layout from 'components/Layout';




function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ); 
}
export default MyApp;
