import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';

function renderHeaderWithRouter() {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  );
}

describe('Header', () => {
  it('renders Header', () => {
    renderHeaderWithRouter();
    expect(screen.getByRole('heading', { name: /crypto dashboard/i })).toBeInTheDocument();
  });
});
