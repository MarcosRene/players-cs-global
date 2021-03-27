import { AppProps } from 'next/app';
import Progress from 'nextjs-progressbar';

import { ThemeProvider } from 'styled-components';

import theme from '../styles/theme/dark';
import GlobalStyles from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
      <Progress
        color="#fcbf14"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
    </ThemeProvider>
  );
}

export default MyApp;
