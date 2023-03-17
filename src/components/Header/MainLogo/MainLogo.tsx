import cryptoLogo from 'assets/cryptoLogo.svg';

function MainLogo() {
  return (
    <div className='flex'>
      <img className='w-20 mr-4' src={cryptoLogo} alt='' />
      <h1 className='text-4xl text-text-primary self-center'>Crypto Dashboard</h1>
    </div>
  );
}

export default MainLogo;
