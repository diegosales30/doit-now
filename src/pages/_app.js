import { Toaster } from 'react-hot-toast'
import '../styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Toaster />
      <Component {...pageProps} />
    </>
  )
}
