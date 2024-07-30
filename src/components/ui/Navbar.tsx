import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { buttonVariants } from './button';
import { LogIn } from 'lucide-react'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

const Navbar = async () => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  const isAdmin = user?.email === process.env.ADMIN_EMAIL
  return (
    <nav className='sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className='flex h-16 items-center justify-between border-b border-zinc-200'>
          <Link href='/' className='flex z-40 font-semibold text-xl'>
            Find<span className='text-violet-700'>YourFellow</span>
          </Link>

          <div className='h-full flex items-center space-x-4'>
            <div className="flex items-center space-x-7   text-violet-600 ">
          <Link
                  href='/Features'
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  })}>
                  <span>Feature</span>
            </Link>
          <Link
                  href='/'
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  })}>
                  Discovery
            </Link>
          <Link
                  href='/'
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  })}>
                  Stories
            </Link>
          <Link
                  href='/'
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  })}>
                  Community
            </Link>
            </div>
            {user ? (
              <>
                <Link
                  href='/api/auth/logout'
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  })}>
                  Sign out
                </Link>
                {isAdmin ? (
                  <Link
                    href='/dashboard'
                    className={buttonVariants({
                      size: 'sm',
                      variant: 'ghost',
                    })}>
                    Dashboard ✨
                  </Link>
                ) : null}
                <Link
                  href='/configure/upload'
                  className={buttonVariants({
                    size: 'sm',
                    className: 'hidden sm:flex items-center gap-1',
                  })}>
                  Explore

                </Link>
              </>
            ) : (
              <>

             
                <Link
                  href='/Auth/Signup'
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  })}>
                  Sign up
                </Link>

                <Link
                  href='/Auth/Login'
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  })}>
                  Login
                </Link>

                <div className='h-8 w-px bg-zinc-200 hidden sm:block' />

                <Link
                  href='/configure/upload'
                  className={buttonVariants({
                    size: 'sm',
                    className: 'hidden sm:flex items-center gap-1',
                  })}>
                  Explore
                  <LogIn className='ml-1.5 h-5 w-5' />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar