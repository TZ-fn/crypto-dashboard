import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import CoinContextProvider from 'providers/CoinContextProvider';
import CoinList from './CoinList';
import mockedContextData from '~/tests/mockedContextData';

vi.mock('@tanstack/react-query', async () => {
  const actual = await vi.importActual('@tanstack/react-query');
  if (typeof actual === 'object') {
    return {
      ...actual,
      useQuery: vi.fn().mockReturnValue({ data: { data: [] }, isLoading: false, error: {} }),
    };
  }
});

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
    screen.debug();
  });

  it('sets the descending order correctly', async () => {});
  it('sets the ascending order correctly', async () => {});
});
