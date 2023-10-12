import useFavourites from 'hooks/useFavourites';
import FavouritesListElement from './FavouritesListElement/FavouritesListElement';

function FavouritesList() {
  const [favourites, setFavourites] = useFavourites();

  return (
    <ul className='m-2 flex flex-col'>
      {favourites.map(({ name, logo }) => (
        <FavouritesListElement
          key={name}
          name={name}
          logo={logo}
          deletingFunction={setFavourites}
        />
      ))}
    </ul>
  );
}

export default FavouritesList;
