import GlobalStyles from '../styles/globals';
import type { AppProps } from 'next/app';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import Theme from '../styles/Theme';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { store } from '../redux/store';
import { Provider } from 'react-redux';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
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
