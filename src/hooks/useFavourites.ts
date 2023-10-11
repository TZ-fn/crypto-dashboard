import useLocalStorage from './useLocalStorage';
import FavouriteCoin from 'types/FavouriteCoin';

const useFavourites = () => {
  const [favourites, setFavourites] = useLocalStorage<FavouriteCoin[]>('favourites', []);

  function handleFavourites(name: string, logo: string | undefined) {
    if (favourites.filter((coin) => coin.name === name).length > 0) {
      setFavourites((prev) => prev.filter((coin) => coin.name !== name));
    } else {
      setFavourites((prev) => [...prev, { name, logo }]);
    }
  }

  return [favourites, handleFavourites] as const;
};

export default useFavourites;
