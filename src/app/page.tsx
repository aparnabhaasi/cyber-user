import HomeOne from '@/components/homes/home';
import Wrapper from '@/layouts/Wrapper';
import Head from 'next/head';
import React from 'react';

export const metadata = {
  title: "Sinusoidal Cyber Technologies Pvt.Ltd",
};

const Index = () => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <link rel="icon" href="assets/img/cyberlogo.png" />
      </Head>
      <Wrapper>
        <HomeOne />
      </Wrapper>
    </>
  );
};

export default Index;
