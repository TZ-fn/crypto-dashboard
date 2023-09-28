import useFavourites from 'hooks/useFavourites';
import FavouritesListElement from './FavouritesListElement/FavouritesListElement';
import useLocalStorage from '~/hooks/useLocalStorage';

function FavouritesList() {
  const [favourites, setFavourites] = useLocalStorage('favourites');

  console.log(favourites);

  const deleteFromFavourites = (name: string) => {
    setFavourites((prev) => prev.filter((item) => item.name !== name));
  };

  return (
    <ul className='flex flex-col'>
      {favourites.map(({ id, name, logo }) => (
        <FavouritesListElement
          key={Math.random()}
          name={name}
          logo={logo}
          deletingFunction={deleteFromFavourites}
        />
      ))}
      <button
        className='mx-2'
        onClick={() => {
          setFavourites((prev) => [
            ...prev,
            {
              id: 1,
              name: `BT${Math.random()}`,
              logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
            },
          ]);
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
