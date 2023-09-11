import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Params } from 'react-router-dom';
import { vi } from 'vitest';
import mockedContextData from 'tests/mockedContextData';
import CoinDetails from './CoinDetails';
import CoinsContext from 'context/CoinsContext';

const coinsName = mockedContextData.latestData.data.data[0].name.toLocaleLowerCase();
const nameRegex = new RegExp(coinsName, 'i');

function renderCoinDetailsWithContext() {
  vi.mock('react-router-dom', () => ({
    useParams: (): Readonly<Params<string>> => ({ name: coinsName }),
  }));

  render(
    <CoinsContext.Provider value={mockedContextData}>
      <CoinDetails />
    </CoinsContext.Provider>,
  );
}

describe('CoinDetails', () => {
  it('renders CoinDetails', async () => {
    renderCoinDetailsWithContext();
    expect(await screen.findByText(/current price/i)).toBeInTheDocument();
    expect(await screen.findByText(/subreddit/i)).toBeInTheDocument();
  });

  it("renders CoinDetails with current coin's data", async () => {
    renderCoinDetailsWithContext();
    expect(await screen.findByRole('heading', { name: nameRegex })).toBeInTheDocument();
  });
});
