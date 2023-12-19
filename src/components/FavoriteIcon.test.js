import { fireEvent, render, screen } from '@testing-library/react';

import FavoriteIcon from './FavoriteIcon';

describe('FavoriteIcon', () => {
  test('renders the component', () => {
    render(<FavoriteIcon listing={{ mlsId: '123' }} />);
    
    // Assert that the favorite icon is initially rendered as not selected
    const iconElement = screen.getByAltText('not favorite icon');
    expect(iconElement).toBeInTheDocument();

    // Assert that the button has the correct aria-label
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveAttribute('aria-label', 'Add to favorites');
  });

  test('toggles the favorite icon when clicked', () => {
    render(<FavoriteIcon listing={{ mlsId: '123' }} />);
    
    // Click the favorite icon button
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);

    // Assert that the favorite icon is now selected
    const iconElement = screen.getByAltText('favorite icon');
    expect(iconElement).toBeInTheDocument();

    // Assert that the button has the correct aria-label
    expect(buttonElement).toHaveAttribute('aria-label', 'Remove from favorites');
  });
});