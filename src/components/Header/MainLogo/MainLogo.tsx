import { Link } from 'react-router-dom';
import cryptoLogo from '/cryptoLogo.svg';

function MainLogo() {
  return (
    <Link to='/'>
      <div className='flex'>
        <img className='w-16 mr-4' src={cryptoLogo} alt='Crypto Dashboard Logo' />
        <h1 className='text-4xl text-text-primary self-center'>Crypto Dashboard</h1>
      </div>
    </Link>
  );
}

export default MainLogo;
