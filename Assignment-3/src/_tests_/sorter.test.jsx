import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Sorter from '../components/sorter';
import { setPriceSort } from '../actions/filterAction';

const mockDispatch = vi.fn();

vi.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: () => vi.fn()
}));



describe('Sorter Component Functions', () => {
  let mockOnSort;

  beforeEach(() => {
    mockDispatch.mockClear();
  });

  it('should dispatch setPriceSort action when option is selected', () => {
    const { getByText } = render(<Sorter />);
    
    fireEvent.click(getByText('Price: Low to High'));
    fireEvent.click(getByText('Price: High to Low'));
    
    expect(mockDispatch).toHaveBeenCalledWith(setPriceSort('dsc'));
  });


});