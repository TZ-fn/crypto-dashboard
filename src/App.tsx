import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import './index.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route element={<p>asdasd</p>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
