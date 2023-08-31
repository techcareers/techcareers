import '@/styles/globals.css'
import localFont from 'next/font/local'



const HMGroupAmpersand = localFont({
  src: [
    {
      path: '../public/fonts/HMGroupAmpersand-Bold.woff2',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: '../public/fonts/HMGroupAmpersand-BoldItalic.woff2',
      weight: 'bold',
      style: 'italic',
    },
    {
      path: '../public/fonts/HMGroupAmpersand-Italic.woff2',
      weight: 'normal',
      style: 'italic',
    },
    {
      path: '../public/fonts/HMGroupAmpersand-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/HMGroupAmpersand-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/fonts/HMGroupAmpersand-Regular.woff2',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: '../public/fonts/HMGroupAmpersand-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/HMGroupAmpersand-SemiboldItalic.woff2',
      weight: '600',
      style: 'italic',
    },
  ],
})

export default function App({ Component, pageProps }) {
  return (
  
  <main className='HMGroupAmpersand'> 
    <Component {...pageProps} />
  </main>
  )
}
