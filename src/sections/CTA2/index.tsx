import React from 'react';
import { useHubspotForm } from '@aaronhayes/react-use-hubspot-form';

export default function CTA2() {

  const { error } = useHubspotForm({
    portalId: '39701769',
    formId: 'fe1ac879-2985-4d10-9235-99201498e219',
    target: '#form',
  });

  return (
    <div className='relative h-full bg-bottom bg-cover lg:bg-contain bg-green-bg'>
      <div className='flex flex-col justify-start items-center z-2 px-4 py-24 lg:px-32'>
        <h2 className='max-w-6xl mobile-header-light lg:h1-light'>
          Apply to join the Builders&apos; Program
        </h2>
        <form className='mt-8 px-2 pt-20 lg:px-7 lg:py-12'>
        <div className='mx-auto max-w-xl lg:mr-0 lg:max-w-lg'>
          <div id='form'></div>
        </div>
        {error && <div>There was a problem loading this form.</div>}
        </form>
      </div>
    </div>
  );
}
