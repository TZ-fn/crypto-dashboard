import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Header from './Header';

function renderHeaderWithRouter() {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );
}

describe('Header', () => {
  it('renders Header', () => {
    renderHeaderWithRouter();
    expect(screen.getByRole('heading', { name: /crypto dashboard/i })).toBeInTheDocument();
  });
});
