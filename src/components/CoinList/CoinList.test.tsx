import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CoinList from './CoinList';
import mockedContextData from '~/tests/mockedContextData';
import CoinsContext from 'context/CoinsContext';

function renderCoinListWithContext() {
  render(
    <BrowserRouter>
      <CoinsContext.Provider value={mockedContextData}>
        <CoinList />
      </CoinsContext.Provider>
    </BrowserRouter>,
  );
}

describe('CoinDetails', () => {
  it('renders CoinDetails', async () => {
    renderCoinListWithContext();
    expect(await screen.findByRole('columnheader', { name: /logo/i })).toBeInTheDocument();
    expect(
      await screen.findByRole('columnheader', { name: /name and symbol/i }),
    ).toBeInTheDocument();
    expect(await screen.findByRole('columnheader', { name: /price/i })).toBeInTheDocument();
    expect(
      await screen.findByRole('columnheader', { name: /volume \(24h\)/i }),
    ).toBeInTheDocument();
    screen.debug();
  });

  it('sets the descending order correctly', async () => {});
  it('sets the ascending order correctly', async () => {});
});
