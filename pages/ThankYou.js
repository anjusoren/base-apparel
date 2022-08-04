import React from 'react'
import Header from './components/Header'
import Link from 'next/link'

const ThankYou = () => {
  return (
   <>
     <div className="md:grid md:grid-cols-2">
    <div>
    <div className="pt-40 md:pt-40"><Header/></div>
    <div className="p-3 font-medium text-rose-400 
    md:ml-10 md:text-xl">
    <h1>Thank you for subscribing. We will keep updating
     you through the email.</h1></div>
    </div>
    <div></div>
    </div>
    <div className="ml-3 font-medium text-slate-400
     hover:text-slate-900 md:pl-10">
    <Link href="/">
    <a>Go back</a>
   </Link>
    </div>
   </>
   
  )
}

export default ThankYou
