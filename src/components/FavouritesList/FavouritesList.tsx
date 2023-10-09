import useFavourites from 'hooks/useFavourites';
import FavouritesListElement from './FavouritesListElement/FavouritesListElement';

function FavouritesList() {
  const [favourites, setFavourites] = useFavourites();

  return (
    <ul className='flex flex-col'>
      {favourites.map(({ id, name, logo }) => (
        <FavouritesListElement
          key={name}
          name={name}
          logo={logo}
          deletingFunction={setFavourites}
        />
      ))}
      <button
        onClick={() => {
          setFavourites(() => []);
        }}
      >
        Clear
      </button>
    </ul>
  );
}

export default FavouritesList;
