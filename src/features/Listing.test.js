import { render, screen } from '@testing-library/react';

import Listing from './Listing';
import React from 'react';

describe('Listing', () => {
  const listing = {
    photos: ['house.jpg'],
    property: {
      bedrooms: 3,
      area: 1500,
    },
    listPrice: 250000,
    address: {
      full: '123 Main St, City, State',
    },
    listDate: '2022-01-01',
  };

  it('renders the listing details correctly', () => {
    render(<Listing listing={listing} />);

    const priceElement = screen.getByText('$250,000');
    expect(priceElement).toBeInTheDocument();

    const addressElement = screen.getByText('123 Main St, City, State');
    expect(addressElement).toBeInTheDocument();

    const imageElement = screen.getByAltText('front of house');
    expect(imageElement).toBeInTheDocument();
  });
});