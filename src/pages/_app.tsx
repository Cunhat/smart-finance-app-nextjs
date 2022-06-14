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

export default MyApp;
