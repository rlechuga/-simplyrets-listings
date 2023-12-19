import { render, screen } from '@testing-library/react';

import Header from './Header';
import React from 'react';

describe('Header', () => {
  it('renders the correct page title', () => {
    const pageTitle = 'My Page Title';
    render(<Header pageTitle={pageTitle} />);
    const titleElement = screen.getByText(pageTitle);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the header with the correct styling', () => {
    const pageTitle = 'My Page Title';
    render(<Header pageTitle={pageTitle} />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toHaveClass('sticky top-0 p-2 sm:p-4 bg-[#F4F4F4]');
  });
});



  

