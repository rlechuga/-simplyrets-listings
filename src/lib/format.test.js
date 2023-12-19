import { combineBaths, formatDate, formatPrice } from './format';

describe('combineBaths', () => {
  test('combines full baths and half baths correctly', () => {
    const currentListing = {
      property: {
        bathsFull: 2,
        bathsHalf: 1,
      },
    };

    const combinedBaths = combineBaths(currentListing);
    expect(combinedBaths).toBe(2.5);
  });
});

describe('formatPrice', () => {
  test('formats price correctly', () => {
    const price = 1000000;
    const formattedPrice = formatPrice(price);
    expect(formattedPrice).toBe('$1,000,000');
  });
});

describe('formatDate', () => {
  test('formats date correctly', () => {
    const dateString = '1995-11-16T11:59:54.795471Z';
    const formattedDate = formatDate(dateString);
    expect(formattedDate).toBe('11/16/95');
  });
});