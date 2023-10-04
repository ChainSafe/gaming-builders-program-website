/* eslint-disable @next/next/no-img-element */
"use strict"
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { List, X } from '@phosphor-icons/react';
import Link from 'next/link';
import FlyoutMenuItem from '@/components/FlyoutMenuItem';
import {
  navbarSimpleLinks,
  productCTA,
  productOptions,
  resourcesOptions,
} from "@/data/navbar";
import Button from '../Button/ExternalButton';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-black">
      <nav
        className="flex items-center justify-between p-6 lg:px-4"
        aria-label="Global"
      >
        <Link href="/" className="flex lg:flex-1">
          <img className='w-[120px] max-h-24' src="/logo.png" alt="ChainSafe Gaming" />
        </Link>                           
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary-100"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <List className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {/* navbar ld */}
        <div className="hidden lg:flex lg:gap-x-12">
          <FlyoutMenuItem
            name="Product"
            options={productOptions}
            callsToAction={productCTA}
          />
          <FlyoutMenuItem
            name="Resources"
            options={resourcesOptions}
          
          />
          {navbarSimpleLinks.map((link) => (
            <Link key={link.name}  href={link.href} className='text-md inline-flex items-center gap-x-1 rounded-full px-4 py-2 leading-6 text-gray-300 ring-0 hover:text-brand-400 focus:outline-none focus-visible:ring-gray-900 focus-visible:ring-opacity-75'>
              {link.name}
            </Link>
          ))}
        
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"><Button type="frosted" href="bd@chainsafe.io">Contact</Button></div>
      </nav>


      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <img className="w-[100px]" src="/logo.png" alt="ChainSafe Gaming web3.unity"  />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-primary-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="divide-y divide-gray-500/10">
              <div className='flex flex-col'>               {navbarSimpleLinks.map((link) => (
                <Link key={link.name}  href={link.href} className='text-md inline-flex items-center gap-x-1 rounded-full px-4 py-6 leading-6 text-gray-300 ring-0 hover:text-opacity-75 focus:outline-none focus-visible:ring-gray-900 focus-visible:ring-opacity-75'>
              {link.name}
            </Link>
              ))}
                </div>
              <div className="space-y-8 py-6 lg:space-y-2">
                <FlyoutMenuItem
                  name="Product"
                  options={productOptions}
                  callsToAction={productCTA}
                />
                <FlyoutMenuItem
                  name="Resources"
                  options={resourcesOptions}
                />
                 
              </div>

            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
