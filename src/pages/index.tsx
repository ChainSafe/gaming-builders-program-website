import React from 'react';
import Hero from '@/sections/Hero';
import Head from 'next/head';
import WhoShouldApply from '@/sections/WhoShouldApply';
import Why from '@/sections/Why';
import Offer from '@/sections/Offer';
import WhatWeLookFor from '@/sections/WhatWeLookFor';
import CTA from '@/sections/CTA';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
    
      <Navbar />
      <Hero />
      <WhoShouldApply />
      <Why />
      <Offer />
      <WhatWeLookFor />
      <CTA />
      <Footer />
    </>
  );
}
