import Input from '@/components/ui/Input'
import { Button } from '@/components/ui/button';
import { buttonVariants } from'@/components/ui/button';
import { LogIn } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function page() {

  return (
    <div className="relative h-full w-full bg-[url('/bg1.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
        <div className="bg-black w-full h-full lg:bg-opacity-50 ">
            <div className="flex justify-center">
                <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-12 lg:h-2/5 lg:max-md rounded-md ">
                <h2 className='text-white text-4xl mb-8 font-semibold'>Sign up</h2>
                <div className="lfex flex-col gap-4">
                    <Input 
                    label='Email'
                    id='email'
                    type='email'
                    />
                    <div className="pb-4"></div>
                    <Input 
                    label='userName'
                    id='name'
                    />
                     <div className="pb-4"></div>
                    <Input 
                    label='Password'
                    id='password'
                    type='password'
                    />
                   <Button className='px-3 py-3 mt-8 w-full bg-violet-700 hover:bg-violet-800'>Sign up</Button>
                   <p className='text-neutral-500 mt-4 text-sm'>Already have account?
                    <Link  href='/Auth/Login'className='text-white ml-2 hover:underline cursor-pointer'> login to account</Link>

                   </p>
                </div>
                </div>
            </div>
            <div className="px-9 py-8 mx-5 my-9"></div>
        </div>
    </div>
  )
}

export default page