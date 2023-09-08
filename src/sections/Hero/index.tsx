import React from 'react';
import Button from '@/components/Button/ExternalButton';
import { formUrl } from '../../data/constants';

export default function Hero() {
  return (
    <div className='relative md:min-h-[80vh] h-full bg-bottom bg-cover xl:bg-contain bg-green-bg'>
      <div className='flex flex-col justify-center z-2 px-4 py-40 lg:px-32 lg:py-48'>
        <h2 className='max-w-4xl mobile-header-light lg:h1-light'>
          Build innovative projects using our Gaming SDK and Marketplace
        </h2>
        <p className='h4-light max-w-4xl pb-8'>
          The ChainSafe Gaming Builders Program offers funding, guidance, and
          support to developers interested in building creative projects with
          ChainSafe Gaming.
        </p>
        <div>
        <Button href={formUrl} type='primary'>
          Submit Application
          </Button>
        </div>
      </div>
    </div>
  );
}
