import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FavouritesListElement from './FavouritesListElement';

function renderFavouritesListElement() {
  render(
    <MemoryRouter>
      <FavouritesListElement id={1} key={1} name={'Bitcoin'} logo={''} deletingFunction={() => {}} />
    </MemoryRouter>,
  );
}

describe('FavouritesListElement', () => {
  it('renders correctly', async () => {
    renderFavouritesListElement();

    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
    expect(screen.getByText(/bitcoin/i)).toBeInTheDocument();
  });
});
