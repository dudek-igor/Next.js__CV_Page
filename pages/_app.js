import AppTheme from 'styles/Theme';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function MyApp({ Component, pageProps }) {
  // Register Plugin
  gsap.registerPlugin(ScrollTrigger);
  return (
    <AppTheme>
      <Component {...pageProps} />
    </AppTheme>
  );
}

export default MyApp;
