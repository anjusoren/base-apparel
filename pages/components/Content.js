import React from 'react'
import EmailSection from './EmailSection'

const Content = () => {
  return (
    <div>
     <div className="p-6 md:pt-14">
     <div className=" m-auto md:ml-8 text-rose-400">
     <h1 className="text-5xl  text-center md:text-left md:text-6xl
     tracking-widest font-light">WE&apos;RE</h1></div>
      <div className=" m-auto md:ml-8">
      <h1 className="text-5xl text-center md:text-left md:text-6xl
      tracking-widest font-medium">COMING</h1></div>
      <div className=" m-auto md:ml-8 ">
      <h1 className="text-5xl text-center md:text-left md:text-6xl
      tracking-widest font-medium">SOON</h1></div>
      <div>
     </div>
        <div className="w-9/12 m-auto text-center pt-3 text-rose-400 
        md:text-left md:ml-8 md:pt-10 ">
        <p>Hello fellow shoppers! We&apos;re currently building
        our new fashion store. Add your email below to stay up-to-date 
        with announcements and our launch deals. </p>
        </div>
      </div>
      <EmailSection/>
    </div>
  )
}

export default Content
