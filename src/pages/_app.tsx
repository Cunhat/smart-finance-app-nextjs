import GlobalStyles from '../styles/globals';
import type { AppProps } from 'next/app';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import Theme from '../styles/Theme';
import { apolloClient } from '../api/client';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import { withTRPC } from '@trpc/next';
import type { AppRouter } from '@/backend/router';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <Theme>
          <Component {...pageProps} />
          <GlobalStyles />
        </Theme>
      </Provider>
    </ApolloProvider>
  );
}

function getBaseUrl() {
  if (process.browser) return ''; // Browser should use current path
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url

  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    const url = `${getBaseUrl()}/api/trpc`;

    return {
      url,
    };
  },
  ssr: true,
})(MyApp);
