import React from 'react';
import Button from '@/components/Button/ExternalButton';
import { formUrl } from '../../data/constants';
import { motion } from "framer-motion";
import { fadeInVariant } from "@/styles/animations";
import Image from 'next/image';

export default function Hero() {
  return (
    <div className='relative md:min-h-[80vh] h-full bg-bottom bg-cover xl:bg-contain bg-green-bg'>
      <motion.div initial='offscreen'
          whileInView='onscreen' viewport={{amount: 0.4}} className='relative flex flex-col justify-center z-4 px-4 py-40 lg:px-32 lg:py-48'>
        <motion.h2 variants={fadeInVariant}  className='max-w-4xl z-4 mobile-header-light lg:h1-light'>
          Build innovative projects using our Gaming SDK and Marketplace
        </motion.h2>
        <motion.p variants={fadeInVariant}  className='h4-light max-w-4xl pb-8'>
          The ChainSafe Gaming Builders Program offers funding, guidance, and
          support to developers interested in building creative projects with
          ChainSafe Gaming.
        </motion.p>
        <div>
        <Button href={formUrl} type='primary'>
          Submit Application
          </Button>
        </div>
      <Image src="/home.png"  className='hidden absolute right-0 lg:inline-block bottom-0 z-0 w-10/12' width={1400} height={600} alt="" />
      </motion.div>
    </div>
  );
}
