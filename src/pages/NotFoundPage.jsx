import MaxWidthWrapper from '@components/MaxWidthWrapper';
import React from 'react';

const NotFoundPage = () => {
  return (
    <MaxWidthWrapper>
      <section className="flex items-center justify-center h-screen">
        <h1 className="text-xl">Opps, this page is not found</h1>
      </section>
    </MaxWidthWrapper>
  );
};

export default NotFoundPage;
