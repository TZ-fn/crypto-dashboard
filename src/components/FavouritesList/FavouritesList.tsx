import useFavourites from 'hooks/useFavourites';
import FavouritesListElement from './FavouritesListElement/FavouritesListElement';

function FavouritesList() {
  const [favourites, setFavourites] = useFavourites();

  return (
    <ul className='flex'>
      {favourites.map(({ id, name, logo }) => (
        <FavouritesListElement key={id} name={name} logo={logo} />
      ))}
      <button
        className='mx-2'
        onClick={() => {
          if (typeof setFavourites === 'function') {
            setFavourites((prev) => [...prev, { id: 1, name: 'BT', logo: 'logo' }]);
          }
        }}
      >
        Click
      </button>
    </ul>
  );
}

export default FavouritesList;
