import React from 'react';
import Hero from '@/sections/Hero';
import WhoShouldApply from '@/sections/WhoShouldApply';
import Why from '@/sections/Why';
import WhatWeLookFor from '@/sections/WhatWeLookFor';
import CTA from '@/sections/CTA';
import Testimonials from '@/sections/Testimonials';
import Offer from '@/sections/Offer';
import FAQ from '@/sections/FAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <Offer />
      <Why />
      <WhoShouldApply />
      <WhatWeLookFor />
      <FAQ />
      <Testimonials />
      <CTA />
    </>
  );
}
