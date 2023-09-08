import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CoinListItem from './CoinListItem';
import formatCurrency from 'utils/formatCurrency';

function renderCoinListItem() {
  render(
    <MemoryRouter>
      <CoinListItem
        index={1}
        logo={''}
        name={'Bitcoin'}
        symbol={'BTC'}
        price={formatCurrency(100)}
        volume24h={formatCurrency(50)}
      />
    </MemoryRouter>,
  );
}

describe('CoinListItem', () => {
  it('renders correctly', async () => {
    renderCoinListItem();

    expect(screen.getByRole('cell', { name: /bitcoin \- btc/i })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: /\$100.00/i })).toBeInTheDocument();
  });
});
