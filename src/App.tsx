import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useContext } from 'react';
import CoinList from './components/CoinList/CoinList';
import CoinDetails from './components/CoinDetails/CoinDetails';
import Layout from './components/Layout/Layout';
import CoinsContext from './context/CoinsContext';
import './index.css';

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<CoinList />} />
            <Route path='/details/:name' element={<CoinDetails />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
