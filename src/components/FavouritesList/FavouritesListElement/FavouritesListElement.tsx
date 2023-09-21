import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';

function FavouritesListElement({ name, logo }: Omit<FavouriteCoin, 'id'>) {
  return (
    <li>
      {logo ? <img className='min-w-[2rem] max-w-[2vw]' src={logo} alt='' /> : <LoadingSpinner />}
      <p>{name}</p>
    </li>
  );
}

export default FavouritesListElement;
