import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import './index.css';

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
