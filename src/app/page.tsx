import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import { ArrowRight, Check, Circle, CircleDot, Link, Phone, Star } from "lucide-react";
import { Earth } from "lucide-react";
import Image1 from "@/components/ui/Image1";
import { buttonVariants } from "@/components/ui/button";
import Scrollsection from "@/components/ui/Scrollsection";
export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
      <MaxWidthWrapper className='pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52'>
          <div className='col-span-2 px-6 lg:px-0 lg:pt-4'>
            <div className='relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start'>
             
              <h1 className='relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl'>
                Welcome to <span className='bg-violet-600 px-2 text-white'>FindYourFellow </span> website
                
              </h1>
              <p className='mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap'>
              Your ultimate student connection hub is here!
                <span className='font-semibold'> Link up with </span> fellow student. Brainstorm,innovate, and conquer projects together while making lifelong friends along the way.
              </p>
              <ul className='mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start'>
                <div className='space-y-2'>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='h-5 w-5 shrink-0 text-violet-600' />
                    Stay Connected with <Earth className="h-4 w-5 shrink-0"/>
                  </li>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='h-5 w-5 shrink-0 text-violet-600' />Have your own AI pet
                  </li>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='h-5 w-5 shrink-0 text-violet-600' />
                    Available on both Android, iOS
                  </li>
                </div>
              </ul>

              <div className='mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5'>
                <div className='flex -space-x-4'>
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/users/user-1.png'
                    alt='user image'
                  />
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/users/user-2.png'
                    alt='user image'
                  />
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/users/user-3.png'
                    alt='user image'
                  />
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/users/user-4.jpg'
                    alt='user image'
                  />
                  <img
                    className='inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/users/user-5.jpg'
                    alt='user image'
                  />
                </div>
                
                <div className='flex flex-col justify-between items-center sm:items-start'>
                  <div className='flex gap-0.5'>
                    <Star className='h-4 w-4 text-violet-600 fill-violet-600' />
                    <Star className='h-4 w-4 text-violet-600 fill-violet-600' />
                    <Star className='h-4 w-4 text-violet-600 fill-violet-600' />
                    <Star className='h-4 w-4 text-violet-600 fill-violet-600' />
                    <Star className='h-4 w-4 text-violet-600 half-fill-violet-600' />
                  </div>

                  <p>
                    <span className='font-semibold'>1.2 lakhs</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit'>
            <div className='relative md:max-w-xl'>
              <img
                src='/vector.png'
                className='absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block'
              />
              <img
                src='/Decoration.png'
                className='absolute w-24 -left-6 bottom-6 select-none'
              />
              <Image1 className='w-64' imgSrc='/chat.png' />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <div className="">
        <Scrollsection/> 
        
      </div>

       <section className='bg-slate-100 grainy-dark py-24'>
        
            
      <section>
        <MaxWidthWrapper className='py-24'>
          <div className='mb-12 px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl sm:text-center'>
              <h2 className='order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900'>
                Join Our Primium Community to Explore 
                <span className='relative px-2 bg-violet-600 text-white'>
                  People of your
                </span>{' '}
                Vibzz
              </h2>
            </div>
          </div>

          <div className='mx-auto max-w-6xl px-6 lg:px-8'>
            <div className='relative flex  items-center  gap-40'>
              <img src="/con1.png" alt="image" className=" h-full w-full rounded-md " />

            </div>
          </div>
          <div className="">
          <h2 className='order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900 py-5 pt-11'>
                Features Of <span className='relative px-2 bg-violet-600 text-white rounded-sm '>
                  FYF
                </span>
              </h2>
          <ul className='mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit'>
            <li className='w-fit'>
              <ArrowRight className='h-5 w-5 text-violet-600 inline mr-1.5' />
              Seamlessly connect with students from your college
and beyond – collaboration has never been this fun!
            </li>
            <li className='w-fit'>
              <ArrowRight className='h-5 w-5 text-violet-600 inline mr-1.5' />
              Buy, sell, or rent study materials with ease – everything
you need is just a click away.
            </li>
            <li className='w-fit'>
              <ArrowRight className='h-5 w-5 text-violet-600 inline mr-1.5' />
              Find your perfect study buddy through our vibrant
community page – studying together is more fun!
            </li>
            <li className='w-fit'>
              <ArrowRight className='h-5 w-5 text-violet-600 inline mr-1.5 font-semibold' />Interact with your adorable AI Pet – it’s here to assist you
with anything and send you the cutest notifications ever!
            </li>

          
              
          </ul>
          </div>
          </MaxWidthWrapper>
            
       
          </section>
          </section>
          <MaxWidthWrapper className='flex flex-col items-center gap-16 sm:gap-32'>
          <div className='flex flex-col lg:flex-row items-center gap-4 sm:gap-6'>
            <h2 className='order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900'>
              Find<span className="text-violet-600">YourFellow </span>
              <span className='relative px-2'>
                Reviewers
                
              </span>
              say
            </h2>
            </div>
          <div className=" lg:flex-row row-span-2">
          <div className='mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16'>
            <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20'>
              <div className='flex gap-0.5 mb-2'>
              <Star className='h-5 w-5 text-violet-600 fill-violet-600' />
                <Star className='h-5 w-5 text-violet-600 fill-violet-600' />
                <Star className='h-5 w-5 text-violet-600 fill-violet-600' />
                <Star className='h-5 w-5 text-violet-600 fill-violet-600' />
                <Star className='h-5 w-5 text-violet-600 fill-violet-600' />
              </div>
              <div className='text-lg leading-8'>
                <p>
                At Find Your Fellow, we believe in making
your college journey not just about the grind, but also about the
unforgettable memories and connections you make. So, why
wait? Join the community and let's rock this student life together!

                  <span className='p-0.5 bg-slate-600 text-white'>
                  #FindYourFellow #StudentLife #CollaborationNation #BJP
                  </span>
                  
                </p>
              </div>
              <div className='flex gap-4 mt-2'>
                <img
                  className='rounded-full h-12 w-12 object-cover'
                  src='/users/modi.jpeg'
                  alt='user'
                />
                <div className='flex flex-col'>
                  <p className='font-semibold'>Narendra Modi</p>
                  <div className='flex gap-1.5 items-center text-zinc-600'>
                    <Check className='h-4 w-4 stroke-[3px] text-violet-600' />
                    <p className='text-sm'>Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
            
            <div className='mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16'>
            <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20'>
              <div className='flex gap-0.5 mb-2 pt-9'>
                <Star className='h-5 w-5 text-violet-600 fill-violet-600' />
                <Star className='h-5 w-5 text-violet-600 fill-violet-600' />
                <Star className='h-5 w-5 text-violet-600 fill-violet-600' />
                <Star className='h-5 w-5 text-violet-600 fill-violet-600' />
                <Star className='h-5 w-5 text-violet-600 half-fill-violet-600' />
              </div>
              
            </div>
            </div>
            </div>
            </MaxWidthWrapper>
          <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      
      <span className="ml-3 text-xl">FYF</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 FindYourFellow —
      <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@FYF---</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="text-gray-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-500">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-500">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</footer>
    </div>
  );
}
