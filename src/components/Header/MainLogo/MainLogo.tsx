import { Link } from 'react-router-dom';
import cryptoLogo from '/cryptoLogo.svg';

function MainLogo() {
  return (
    <Link to='/'>
      <div className='flex'>
        <img className='mr-4 w-16' src={cryptoLogo} alt='Crypto Dashboard Logo' />
        <h1 className='self-center text-4xl text-text-primary'>Crypto Dashboard</h1>
      </div>
    </Link>
  );
}

export default MainLogo;
