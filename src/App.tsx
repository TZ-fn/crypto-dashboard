import { Route, Routes } from 'react-router-dom';
import { useQuery, useQueryClient, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CryptoList from './components/CryptoList/CryptoList';
import Layout from './components/Layout/Layout';
import './index.css';

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<CryptoList />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
