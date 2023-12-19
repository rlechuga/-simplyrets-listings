import { render, screen } from '@testing-library/react';

import ListingsPage from './ListingsPage';

describe('Listings', () => {
  test('renders the component', () => {
    render(<ListingsPage />);

    const headerElement = screen.getByRole('heading', {
      level: 1,
      name: 'Property Listings',
    });
    expect(headerElement).toBeInTheDocument();

    const listingPanelElement = screen.getByTestId('listing-panel');
    expect(listingPanelElement).toBeInTheDocument();
  });
});
