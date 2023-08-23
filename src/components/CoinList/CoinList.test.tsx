import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import CoinContextProvider from 'providers/CoinContextProvider';
import CoinList from './CoinList';

function renderCoinListWithContext() {
  const queryClient = new QueryClient();

  render(
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <CoinContextProvider>
          <CoinList />
        </CoinContextProvider>
      </QueryClientProvider>
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
  });

  it('sets the descending order correctly', async () => {});
  it('sets the ascending order correctly', async () => {});
});
