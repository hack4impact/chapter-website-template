import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Footer from '../components/footer';
import Nav from '../components/navbar';
import { initializeGA, logPage } from '../components/Analytics';
import { PageTransition } from 'next-page-transitions';

function App({ Component, pageProps }) {
  const router = useRouter();
  const activeRoute = router.pathname;

  // ping Google Analytics on every route change
  useEffect(() => {
    initializeGA();
    logPage();
  }, [activeRoute]);

  return (
    <div>
      <Nav />
      <PageTransition timeout={300} classNames="page-transition">
        <Component {...pageProps} />
      </PageTransition>
      <Footer />
      <style jsx global>{`
        .page-transition-enter {
          opacity: 0;
        }
        .page-transition-enter-active {
          opacity: 1;
          transition: opacity 100ms;
        }
        .page-transition-exit {
          opacity: 1;
        }
        .page-transition-exit-active {
          opacity: 0;
          transition: opacity 100ms;
        }
      `}</style>
    </div>
  );
}

export default App;
