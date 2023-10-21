import '@/styles/globals.css'
import Header from '@/components/HeaderComponent/Header'
import Footer from '@/components/FooterComponent/FooterComponent'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
    </>
    )
}
