import Header from 'components/Header';
import Listings from 'features/Listings';
import MaxWidthWrapper from '@components/MaxWidthWrapper';
import React from 'react';

const ListingsPage = () => {
  return (
    <MaxWidthWrapper>
      <Header pageTitle="Property Listings" />
      <div
        data-testid="listing-panel"
        className="flex items-center justify-center mt-7"
      >
        <Listings />
      </div>
    </MaxWidthWrapper>
  );
};

export default ListingsPage;
