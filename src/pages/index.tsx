import React from 'react';
import Hero from '@/sections/Hero';
import WhoShouldApply from '@/sections/WhoShouldApply';
import Why from '@/sections/Why';
import Offer from '@/sections/Offer';
import WhatWeLookFor from '@/sections/WhatWeLookFor';
import CTA from '@/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <WhoShouldApply />
      <Why />
      <Offer />
      <WhatWeLookFor />
      <CTA />
    </>
  );
}
