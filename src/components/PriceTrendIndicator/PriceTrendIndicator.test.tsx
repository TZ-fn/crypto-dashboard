import { render, screen } from '@testing-library/react';

import PriceTrendIndicator from './PriceTrendIndicator';

describe('PriceTrendIndicator', () => {
  it('renders downward PriceTrendIndicator', () => {
    render(<PriceTrendIndicator trend='down' />);
    expect(screen.getByRole('img', { name: /red arrow pointing downwards/i })).toBeInTheDocument();
  });

  it('renders upward PriceTrendIndicator', () => {
    render(<PriceTrendIndicator trend='up' />);
    expect(screen.getByRole('img', { name: /green arrow pointing upwards/i })).toBeInTheDocument();
  });
});
