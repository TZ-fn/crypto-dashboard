import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CoinList from './components/CoinList/CoinList';
import CoinDetails from './components/CoinDetails/CoinDetails';
import Layout from './components/Layout/Layout';
import './index.css';

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<CoinList />} />
            <Route path='/details/:name' element={<CoinDetails />}></Route>
          </Route>
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
