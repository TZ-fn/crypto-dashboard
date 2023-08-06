import { render, screen } from '@testing-library/react';

import CoinDetails from './CoinDetails';

function renderCoinDetailsWithRouter() {
  render(<CoinDetails />);
}

describe('CoinDetails', () => {
  it('renders CoinDetails', () => {
    renderCoinDetailsWithRouter();
    expect(screen.getByRole('heading', { name: /crypto dashboard/i })).toBeInTheDocument();
  });
});
