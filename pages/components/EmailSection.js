import Link from 'next/link';
import {useForm} from 'react-hook-form'
import ThankYou from '../ThankYou';
import { useRouter } from 'next/router'
import Router from 'next/dist/server/router';

const EmailSection = () => {
  const router = useRouter();
  const {register, handleSubmit, watch, formState: {errors}} = useForm();
   const onSubmit = data =>  {
      console.log(data)
      router.push('/ThankYou')
    }
  
  return (
    <div className="md:pt-10">
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-10/12 m-auto flex">
        <input className="border-rose-400 
        border-2 w-10/12 p-2 rounded-3xl focus:text-rose-500"
        {...register("email",{pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        , required:true})} placeholder="Email Address"/>
        <button className="bg-rose-400 hover:bg-rose-500 text-white w-1/3 p-2 h-11 -ml-8 z-999 
         rounded-3xl">&gt;</button></div>
          <div className=" w-1/2 m-auto "><error className="text-xl font-medium text-red-600">
          {errors.email?.type === 'required' && "email is required !"}
          {errors.email?.type === 'pattern' && "enter a valid email !"}
        </error></div>
      
      </form>
    </div>
  )
}

export default EmailSection
