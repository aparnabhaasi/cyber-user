
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import AboutAreaHomeThree from '../homes/home-3/AboutAreaHomeThree';
import TeamAreaHomeOne from '../homes/home/TeamAreaHomeOne';
import CounterAreaHomeOne from '../homes/home/CounterAreaHomeOne';
import PriceAreaHomeOne from '../homes/home/PriceAreaHomeOne';
import TestimonialAreaHomeOne from '../homes/home/TestimonialAreaHomeOne';
import BlogAreaHomeOne from '../homes/home/BlogAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';

const AboutTwo = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="About Us" subtitle="About Us" />
      <AboutAreaHomeThree />
      {/* <TeamAreaHomeOne /> */}
      {/* <CounterAreaHomeOne style_3={true} /> */}
      <PriceAreaHomeOne />
      {/* <TestimonialAreaHomeOne />
      <BlogAreaHomeOne /> */}
      <FooterOne />
    </>
  );
};

export default AboutTwo;