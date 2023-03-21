import cryptoLogo from '/cryptoLogo.svg';

function MainLogo() {
  return (
    <div className='flex'>
      <img className='w-16 mr-4' src={cryptoLogo} alt='Crypto Dashboard Logo' />
      <h1 className='text-4xl text-text-primary self-center'>Crypto Dashboard</h1>
    </div>
  );
}

export default MainLogo;
