import { render, screen } from '@testing-library/react';
import SortTypeIndicator from './SortTypeIndicator';

describe('SortTypeIndicator', () => {
  it('renders ascending SortTypeIndicator correctly', () => {
    render(<SortTypeIndicator type='ascending' />);
    expect(screen.getByText(/▲/i)).toBeInTheDocument();
  });
  it('renders descending SortTypeIndicator correctly', () => {
    render(<SortTypeIndicator type='descending' />);
    expect(screen.getByText(/▼/i)).toBeInTheDocument();
  });
});
