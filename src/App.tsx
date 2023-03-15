import { Route, Routes } from 'react-router-dom';
import MainLogo from './components/Header/MainLogo/MainLogo';
import Layout from './components/Layout/Layout';
import './index.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
