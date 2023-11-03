import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import FavouritesList from './FavouritesList';
import mockedContextData from 'tests/mockedContextData';
import CoinsContext from 'context/CoinsContext';

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
    expect(screen.getByRole('heading', { name: /favourites/i })).toBeInTheDocument();
  });
});
