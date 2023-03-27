import { Route, Routes } from 'react-router-dom';
import CryptoList from './components/CryptoList/CryptoList';
import Layout from './components/Layout/Layout';
import './index.css';

function App() {
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
