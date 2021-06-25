import { useState } from 'react';
import App, { AppInitialProps, AppContext, AppProps } from 'next/app';
import Layout from 'components/Layout';
import { AuthProvider } from 'components/UserContext/UserContext';
import { ErrorBoundary } from 'components/ErrorBoundary/ErrorBoundary';
import type { User } from 'types';
import { isAuthorised, shouldRedirect } from 'utils/auth';

import 'styles/globals.css';
import 'stylesheets/all.scss';
import 'stylesheets/header.scss';

interface Props {
  user?: Partial<User>;
}

const CustomApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const [user] = useState(pageProps.user);
  return (
    <AuthProvider user={user}>
      <Layout>
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </Layout>
    </AuthProvider>
  );
};

CustomApp.getInitialProps = async (
  appContext: AppContext
): Promise<AppInitialProps & Props> => {
  let user;
  if (appContext.ctx.req && appContext.ctx.res) {
    user = isAuthorised(appContext.ctx.req) ?? user;
    const redirect =
      appContext.ctx.req.url && shouldRedirect(appContext.ctx.req.url, user);
    if (redirect && appContext.ctx.res.writeHead) {
      appContext.ctx.res.writeHead(302, {
        Location: redirect,
      });
      appContext.ctx.res.end();
    }
  }
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps, pageProps: { ...appProps.pageProps, user } };
};

export default CustomApp;
