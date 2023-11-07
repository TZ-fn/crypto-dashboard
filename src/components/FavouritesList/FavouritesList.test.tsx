import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import FavouritesList from './FavouritesList';
import mockedContextData from 'tests/mockedContextData';
import CoinsContext from 'context/CoinsContext';

vi.mock('hooks/useFavourites', () => ({
  useFavourites: () => [
    { id: 0, logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png', name: 'Bitcoin' },
    { id: 3, logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png', name: 'BNB' },
    { id: 1, logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png', name: 'Ethereum' },
  ],
}));

function renderFavouritesListWithContext() {
  render(
    <BrowserRouter>
      <CoinsContext.Provider value={mockedContextData}>
        <FavouritesList />
      </CoinsContext.Provider>
    </BrowserRouter>,
  );
}

describe('FavouritesList', () => {
  const user = userEvent.setup();

  it('renders CoinList correctly', async () => {
    renderFavouritesListWithContext();
    screen.debug();
    expect(screen.getByRole('heading', { name: /favourites/i })).toBeInTheDocument();
  });
});
