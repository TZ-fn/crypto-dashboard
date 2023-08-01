import { render, screen } from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
  it('renders Header', () => {
    render(<Header />);
    expect(screen.getByRole('heading', { name: /crypto dashboard/i })).toBeInTheDocument();
  });
});
