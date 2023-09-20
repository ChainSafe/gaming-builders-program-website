import { navigation } from "@/data/footer"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className='bg-gray-900' aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='space-y-8'>
            <Image
              className='w-[150px] lg:w-auto'
              src='/logo.png'
              alt='ChainSafe Gaming'
              width={64}
              height={64}
            />
            <p className='text-lg leading-6 text-gray-400'>
              A better way to build blockchain games.
            </p>
            <div className='flex space-x-6'>
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='hover:brightness-75'>
                  <span className='sr-only'>{item.name}</span>
                  <item.icon className='h-7 w-7 ' aria-hidden='true' />
                </Link>
              ))}
            </div>
          </div>
          <div className='mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0'>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-lg font-semibold leading-6 text-white'>
                  Product
                </h3>
                <ul role='list' className='mt-6 space-y-4'>
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className='text-lg leading-6 text-gray-400 hover:text-brand-400'>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-10 md:mt-0'>
                <h3 className='text-lg font-semibold leading-6 text-white'>
                  Resources
                </h3>
                <ul role='list' className='mt-6 space-y-4'>
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className='text-lg leading-6 text-gray-400 hover:text-brand-400'>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-lg font-semibold leading-6 text-white'>
                  Reach us
                </h3>
                <ul role='list' className='mt-6 space-y-4'>
                  {navigation.reach.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-lg leading-6 text-gray-400 hover:text-brand-400'>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24'>
          <p className='text-xs leading-5 text-gray-400'>
            &copy; 2023 ChainSafe
          </p>
        </div>
      </div>
    </footer>
  );
}
