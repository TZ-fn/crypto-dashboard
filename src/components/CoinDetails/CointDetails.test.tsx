import { render, screen } from '@testing-library/react';
import { Params } from 'react-router-dom';
import { vi } from 'vitest';
import CoinsContext from 'context/CoinsContext';
import mockedContextData from 'tests/mockedContextData';
import CoinDetails from './CoinDetails';

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

console.log(nameRegex);

describe('CoinDetails', () => {
  it('renders CoinDetails', () => {
    renderCoinDetailsWithContext();
    expect(screen.getByText(/current price/i)).toBeInTheDocument();
    expect(screen.getByText(/subreddit/i)).toBeInTheDocument();
  });

  it("renders CoinDetails with current coin's data", () => {
    renderCoinDetailsWithContext();
    expect(screen.getByRole('heading', { name: nameRegex })).toBeInTheDocument();
  });
});
