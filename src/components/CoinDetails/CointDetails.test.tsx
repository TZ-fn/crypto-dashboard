import { render, screen } from '@testing-library/react';

import CoinDetails from './CoinDetails';

function renderCoinDetailsWithRouter() {
  render(<CoinDetails />);
}

describe('CoinDetails', () => {
  it('renders CoinDetails', () => {
    renderCoinDetailsWithRouter();
    expect(screen.getByText(/current price/i)).toBeInTheDocument();
    expect(screen.getByText(/subreddit/i)).toBeInTheDocument();
  });
});
