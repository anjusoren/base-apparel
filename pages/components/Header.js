import Image from 'next/image'
import React from 'react'
import baseapparellogo from '../../public/logo.svg'

const Header = () => {
  return (
    // header container
    <div className="p-6 md:p-7 md:ml-7 bg-white">
      <div className="h-8 w-1/3  relative ">
        <Image src={baseapparellogo} alt="base-apparel-logo" layout="fill"/>
      </div>
    </div>
  )
}

export default Header
