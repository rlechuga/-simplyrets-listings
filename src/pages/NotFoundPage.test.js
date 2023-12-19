import { render, screen } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

describe('Not Found Page', () => {
  it('renders the "Not Found" page correctly', () => {
    render(<NotFoundPage />);

    // Assert that the heading is rendered correctly
    const headingElement = screen.getByText(/Opps, this page is not found/i);
    expect(headingElement).toBeInTheDocument();

    // Assert that the MaxWidthWrapper component is rendered
    const maxWidthWrapperElement = screen.getByTestId('max-width-wrapper');
    expect(maxWidthWrapperElement).toBeInTheDocument();
  });
});
