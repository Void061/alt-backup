import '../styles/globals.css';
import Seo from '../components/base/Seo';


function MyApp({ Component, pageProps }) {
  return <>
  <Seo />
    <Component {...pageProps} />
  </>
}



export default MyApp
