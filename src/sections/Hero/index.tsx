import { motion } from 'framer-motion';
import { fadeInVariant } from '@/styles/animations';
import React from 'react';
import Button from '@/components/Button/ExternalButton';

export type FormPageProps = {
  hsFormId?: string;
  hsPortalId?: string;
  targetName?: string;
};

export default function Hero({}: FormPageProps) {
  return (
    <div className='relative isolate h-[100vh] bg-green-bg'>
      {/* background */}

      <div className='z-2 absolute mt-[30vh] px-32'>
        <h2 className='max-w-8xl text-7xl font-bold tracking-tight text-white'>
          Build innovative projects using our Gaming SDK and Marketplace
        </h2>
        <p className='max-w-6xl text-2xl text-white my-5'>
          {' '}
          The ChainSafe Gaming Builders Program offers funding, guidance, and
          support to developers interested in building creative projects with
          ChainSafe Gaming.
        </p>
        <Button href='#' type='primary' className='mt-5'>
          Submit Application
        </Button>
      </div>
      {/* <div className='absolute z-10 mx-auto grid max-w-8xl px-6 pt-12 lg:static lg:px-8 lg:pt-24 '>
        <motion.div
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true, amount: 0.5 }}
          className='relative mb-5 mt-16 justify-self-end lg:mt-0 lg:max-w-10xl xl:mb-4'>
          <motion.div variants={fadeInVariant}>
            <h2 className='max-w-10xl text-7xl font-bold tracking-tight text-white'>
              Build the immersive in game marketplace you&apos;ve been waiting
              for.
            </h2>
          </motion.div>
        </motion.div>
      </div> */}
    </div>
  );
}
