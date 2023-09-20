import React from 'react';
import Hero from '@/sections/Hero';
import WhoShouldApply from '@/sections/WhoShouldApply';
import Why from '@/sections/Why';
import WhatWeLookFor from '@/sections/WhatWeLookFor';
import CTA from '@/sections/CTA';
import Testimonials from '@/sections/Testimonials';
import Offer from '@/sections/Offer';

export default function Home() {
  return (
    <>
      <Hero />
      <Offer />
      <Why />
      <WhoShouldApply />
      <WhatWeLookFor />
      <Testimonials />
      <CTA />
    </>
  );
}
