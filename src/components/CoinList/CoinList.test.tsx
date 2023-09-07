import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import CoinList from './CoinList';
import mockedContextData from 'tests/mockedContextData';
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
  const user = userEvent.setup();

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
  });

  it('changes the sorting indicator correctly', async () => {
    renderCoinListWithContext();
    const nameHeader = screen.getByRole('columnheader', { name: /name and symbol/i });

    await user.click(nameHeader);

    expect(screen.getByRole('columnheader', { name: /name and symbol ▼/i })).toBeInTheDocument();

    await user.click(nameHeader);

    expect(screen.getByRole('columnheader', { name: /name and symbol ▲/i })).toBeInTheDocument();

    await user.click(nameHeader);

    expect(
      screen.queryByRole('columnheader', { name: /name and symbol ▼/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('columnheader', { name: /name and symbol ▲/i }),
    ).not.toBeInTheDocument();
  });
});
