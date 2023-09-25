import useFavourites from 'hooks/useFavourites';
import FavouritesListElement from './FavouritesListElement/FavouritesListElement';

function FavouritesList() {
  const [favourites, setFavourites] = useFavourites();

  return (
    <ul className='flex flex-col'>
      {favourites.map(({ id, name, logo }) => (
        <FavouritesListElement key={id} name={name} logo={logo} />
      ))}
      <button
        className='mx-2'
        onClick={() => {
          if (typeof setFavourites === 'function') {
            setFavourites((prev) => [
              ...prev,
              {
                id: 1,
                name: 'BitCoin',
                logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
              },
            ]);
          }
        }}
      >
        Click
      </button>
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
