import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import CoinContextProvider from './providers/CoinContextProvider';
import CoinList from './components/CoinList/CoinList';
import CoinDetails from './components/CoinDetails/CoinDetails';
import Layout from './components/Layout/Layout';
import './index.css';

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <CoinContextProvider>
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route index element={<CoinList />} />
                <Route path='/details/:name' element={<CoinDetails />} />
              </Route>
            </Routes>
          </CoinContextProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
