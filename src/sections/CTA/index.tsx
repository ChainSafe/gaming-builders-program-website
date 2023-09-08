import React from 'react';
import Button from '@/components/Button/ExternalButton';

export default function CTA() {
  return (
    <div className='relative h-1/3 bg-green-bg'>
      <div className='flex flex-col justify-center items-center z-2 px-4 py-32 lg:px-32'>
        <h2 className='max-w-6xl mobile-header-light lg:h1-light text-center'>
          Apply to join the Builders Program.
        </h2>
        <div className='mt-8'>
        <Button href='#' type='primary'>
          Submit Application
        </Button>
        </div>
      </div>
    </div>
  );
}
