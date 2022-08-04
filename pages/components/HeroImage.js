import Image from 'next/image'
import React from 'react'
import heroImgsmall from '../../public/hero-mobile.jpg'

const HeroImage = () => {
  return (
    <div>
    {/* small screen view */}
      <div className="w-screen h-80 relative md:hidden">
        <Image src={heroImgsmall} alt="hero img small" layout="fill"/>
      </div>
    </div>
  )
}

export default HeroImage
