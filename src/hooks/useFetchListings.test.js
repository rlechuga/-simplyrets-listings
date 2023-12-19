import { act, renderHook } from '@testing-library/react';
import useFetchListings, { LISTINGS_DATA, LISTINGS_TIMESTAMP } from './useFetchListings';

describe('useFetchListings', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  test('fetches listings from API when cache is empty', async () => {
    const mockListings = [
      { id: 1, title: 'Listing 1' },
      { id: 2, title: 'Listing 2' },
    ];
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue(mockListings),
    };
    global.fetch = jest.fn().mockResolvedValue(mockResponse);

    let hook;
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      hook = renderHook(() => useFetchListings());
    });
    const { result } = hook;

    expect(result.current.listings).toEqual(mockListings);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
    expect(localStorage.getItem(LISTINGS_DATA)).toEqual(
      JSON.stringify(mockListings),
    );
  });

  test('restores listings from cache when cache is valid', async () => {
    const mockListings = [
      { id: 1, title: 'Listing 1' },
      { id: 2, title: 'Listing 2' },
    ];
    const mockTimestamp = new Date().getTime();
    localStorage.setItem(LISTINGS_DATA, JSON.stringify(mockListings));
    localStorage.setItem(LISTINGS_TIMESTAMP, mockTimestamp);

    let hook;
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      hook = renderHook(() => useFetchListings());
    });
    const { result } = hook;

    expect(result.current.listings).toEqual(mockListings);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  test('handles API error', async () => {
    const mockResponse = { ok: false, status: 500 };
    global.fetch = jest.fn().mockResolvedValue(mockResponse);

    let hook;
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      hook = renderHook(() => useFetchListings());
    });
    const { result } = hook;

    expect(result.current.listings).toBeNull();
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toEqual(new Error('HTTP error 500'));
    expect(localStorage.getItem('listings')).toBeNull();
  });
});
