import useFavourites from 'hooks/useFavourites';
import FavouritesListElement from './FavouritesListElement/FavouritesListElement';

function FavouritesList() {
  const [favourites, setFavourites] = useFavourites();

  const sortedFavourites = favourites.sort((coin1, coin2) => new Intl.Collator('en').compare(coin1.name, coin2.name));

  return favourites.length > 0 ? (
    <ul className='flex flex-col'>
      <h2 className=' my-1.5 select-none rounded bg-bg-lighter-2 p-2 text-center font-bold sm:p-2 md:p-5 lg:p-6'>
        Favourites
      </h2>
      {sortedFavourites.map(({ id, name, logo }) => (
        <FavouritesListElement id={id} key={name} name={name} logo={logo} deletingFunction={setFavourites} />
      ))}
    </ul>
  ) : null;
}

export default FavouritesList;
