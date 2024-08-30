import HomeBannerFour from '@/components/page/HomeBannerFour';
import HomeBannerOne from '@/components/page/HomeBannerOne';
import HomeBannerThree from '@/components/page/HomeBannerThree';
import HomeBannerTwo from '@/components/page/HomeBannerTwo';
import ProductList from '@/components/ui/ProductList';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <HomeBannerOne />
      <ProductList/>
      <HomeBannerTwo />
      <HomeBannerThree />
      <HomeBannerFour />
    </div>
  );
};

export default HomePage