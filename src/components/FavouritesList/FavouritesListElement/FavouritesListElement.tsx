import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';

function FavouritesListElement({ name, logo }: Omit<FavouriteCoin, 'id'>) {
  return (
    <li className='m-2 flex items-center'>
      {logo ? (
        <img className='mx-2 min-w-[2rem] max-w-[1.5vw]' src={logo} alt='' />
      ) : (
        <LoadingSpinner />
      )}
      <p>{name}</p>
    </li>
  );
}

export default FavouritesListElement;
