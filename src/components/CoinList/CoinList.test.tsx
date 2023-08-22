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
    expect(await screen.findByRole('cell', { name: /bitcoin \- btc/i })).toBeInTheDocument();
  });
});
