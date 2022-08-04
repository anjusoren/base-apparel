import Head from 'next/head'
import Image from 'next/image'
import {frontendmentoricon} from '../public/favicon-32x32.png'
import Content from './components/Content'
import Header from './components/Header'
import HeroImage from './components/HeroImage'
import heroImgDesk from '../public/hero-desktop.jpg'
import ThankYou from './ThankYou'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>BASE APPAREL</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href={frontendmentoricon} />
      </Head>

      {/* Header Component */}
      
      <main className='md:grid md:grid-cols-2  '>
      <div className="md:pt-10 ">
      
        <div><Header/></div>
        <div><HeroImage/></div>
        <div><Content/></div>
        </div>
      
      <div className="bg-rose-400 md:h-screen relative">
      <Image src={heroImgDesk} alt="hero img small" layout="fill"/>
      </div>
       </main>

       {/* <ThankYou/> */}
    </div>
  )
}
