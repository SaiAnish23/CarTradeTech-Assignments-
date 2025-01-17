import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import { useSelector } from 'react-redux';
import Wrapper from '../components/wrapper';
import { setLoader } from '../actions/filterAction';
import React from 'react';

const mockFetch = vi.fn();
global.fetch = mockFetch;

const mockDispatch = vi.fn();
vi.mock('react-redux', () => ({
    useSelector: vi.fn(),
    useDispatch: () => mockDispatch
}));



const mockStocks = [
    { id: 1, priceNumeric: 1000000 },
    { id: 2, priceNumeric: 500000 },
    { id: 3, priceNumeric: 750000 }
];

describe('Wrapper Component Api Calls', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        mockFetch.mockReset();
        mockDispatch.mockClear();
    });

    it('should fetch products with no filters', async () => {
        mockFetch.mockResolvedValueOnce({
            json: async () => ({ stocks: mockStocks })
        });

        const mockState = {
            filters: { fuel: [],
                 budget: { min: 0, max: Infinity } },
            sortDirection: 'asc',
            loading: false
        };
        useSelector.mockImplementation((selector) => selector(mockState));

        render(<Wrapper />);

        await waitFor(() => {
            expect(mockFetch).toHaveBeenCalledWith('https://stg.carwale.com/api/stocks');
            expect(mockDispatch).toHaveBeenCalledWith(setLoader(true));
            expect(mockDispatch).toHaveBeenCalledWith(setLoader(false));
        });

       
    });

    it('should fetch products with fuel filter', async () => {
        mockFetch.mockResolvedValueOnce({
            json: async () => ({ stocks: mockStocks })
        });

        const mockState = {
            filters: { fuel: [1, 2], 
                budget: { min: 1, max: Infinity } },
            sortDirection: 'asc',
            loading: false
        };
        useSelector.mockImplementation((selector) => selector(mockState));

        render(<Wrapper />);

        await waitFor(() => {
            expect(mockFetch).toHaveBeenCalledWith('https://stg.carwale.com/api/stocks?fuel=1+2');
        });
    });

    it('should fetch products with budget filter', async () => {
        mockFetch.mockResolvedValueOnce({
            json: async () => ({ stocks: mockStocks })
        });

        const mockState = {
            filters: { fuel: [], budget: { min: 5, max: 10} },
            sortDirection: 'asc',
            loading: false
        };
        useSelector.mockImplementation((selector) => selector(mockState));

        render(<Wrapper />);

        await waitFor(() => {
            expect(mockFetch).toHaveBeenCalledWith('https://stg.carwale.com/api/stocks?budget=5-10');
        });
    });

    it('should fetch products with both fuel and budget filters', async () => {
        mockFetch.mockResolvedValueOnce({
            json: async () => ({ stocks: mockStocks })
        });

        const mockState = {
            filters: { fuel: [1], budget: { min: 5, max: 10 } },
            sortDirection: 'asc',
            loading: false
        };
        useSelector.mockImplementation((selector) => selector(mockState));

        render(<Wrapper />);

        await waitFor(() => {
            expect(mockFetch).toHaveBeenCalledWith('https://stg.carwale.com/api/stocks?fuel=1&budget=5-10');
        });
    });

 
});
