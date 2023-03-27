import { Route, Routes } from 'react-router-dom';
import CryptoList from './components/CryptoList/CryptoList';
import Layout from './components/Layout/Layout';
import './index.css';

function App() {
  const COINMARKETCAP_API_KEY = import.meta.env.VITE_COINMARKETCAP_API_KEY;

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<CryptoList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
