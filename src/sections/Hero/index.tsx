import React from 'react';
import Button from '@/components/Button/ExternalButton';
import { formUrl } from '../../../constants';

export default function Hero() {
  return (
    <div className='relative h-full bg-green-bg'>
      <div className='z-2 px-4 py-32 lg:px-32'>
        <h2 className='mobile-header-light lg:h1-light'>
          Build innovative projects using our Gaming SDK and Marketplace
        </h2>
        <p className='h4-light max-w-4xl pb-8'>
          The ChainSafe Gaming Builders Program offers funding, guidance, and
          support to developers interested in building creative projects with
          ChainSafe Gaming.
        </p>
        <Button href={formUrl} type='primary'>
          Submit Application
        </Button>
      </div>
    </div>
  );
}
