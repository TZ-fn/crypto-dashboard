import useFavourites from 'hooks/useFavourites';
import FavouritesListElement from './FavouritesListElement/FavouritesListElement';

function FavouritesList() {
  const [favourites, setFavourites] = useFavourites();

  return (
    favourites.length > 0 && (
      <ul className='flex flex-col'>
        <h2 className='border-b-[1px] border-solid border-border p-4 text-center'>Favourites</h2>
        {favourites.map(({ id, name, logo }) => (
          <FavouritesListElement
            id={id}
            key={name}
            name={name}
            logo={logo}
            deletingFunction={setFavourites}
          />
        ))}
      </ul>
    )
  );
}

export default FavouritesList;
