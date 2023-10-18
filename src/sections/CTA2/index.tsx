import React from 'react';
import { useHubspotForm } from '@aaronhayes/react-use-hubspot-form';

export default function CTA2() {

  const { error } = useHubspotForm({
    portalId: '39701769',
    formId: 'fe1ac879-2985-4d10-9235-99201498e219',
    target: '#form',
  });

  return (
    // <div className='relative h-full bg-bottom bg-cover lg:bg-contain bg-green-bg'>
    //   <div className='flex flex-row justify-start items-center z-2 px-4 py-24 lg:px-32'>
    //     <h2 className='max-w-6xl mobile-header-light lg:h1-light'>
    //       Apply to join the Builders&apos; Program
    //     </h2>
    //     <form className='px-2 '>
    //     <div className='mx-auto max-w-xl lg:mr-0 lg:max-w-lg'>
    //       <div id='form'></div>
    //     </div>
    //     {error && <div>There was a problem loading this form.</div>}
    //     </form>
    //   </div>
    // </div>
        <div className='relative bg-gray-100 py-16 lg:py-8'>
      <div className='mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2'>
        <div className='mx-auto max-w-2xl px-2 pt-10 lg:py-12 lg:pl-12'>
          <h1 className='text-xl font-bold tracking-tight text-black lg:text-6xl'>
             Apply to join the Builders&apos; Program
          </h1>
        </div>
        <form className=' px-2 pt-20 lg:px-6 lg:py-12'>
          <div className='mx-auto max-w-xl lg:mr-0 lg:max-w-lg'>
            <div id='form'></div>
          </div>
          {error && <div>There was a problem loading this form.</div>}
        </form>
      </div>
    </div>
  );
}
