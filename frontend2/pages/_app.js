import '@/styles/globals.css'
import Header from '@/components/HeaderComponent/Header'
import Footer from '@/components/FooterComponent/FooterComponent'

export default function App({ Component, pageProps }) {
  const { hideHeaderFooter } = pageProps;

  return (
    <>
      {!hideHeaderFooter && <Header />}
    <Component {...pageProps} />
    {!hideHeaderFooter && <Footer />}
    </>
    )
}
