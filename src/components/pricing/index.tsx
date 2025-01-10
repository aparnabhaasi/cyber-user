
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import ChooseAreaHomeOne from './ChooseAreaHomeOne';
import PriceAreaHomeOne from '../homes/home/PriceAreaHomeOne';

const Pricing = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Training" subtitle="Training" />
      <ChooseAreaHomeOne />
      <PriceAreaHomeOne />
      <FooterOne />
    </>
  );
};

export default Pricing;