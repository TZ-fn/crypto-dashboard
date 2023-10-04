import useLocalStorage from './useLocalStorage';
import FavouriteCoin from 'types/FavouriteCoin';

const useFavourites = () => {
  const [favourites, setFavourites] = useLocalStorage<FavouriteCoin[]>('favourites', []);

  function handleFavourites(id: number, logo: string | undefined, name: string) {
    if (favourites.filter((coin) => coin.name === name)) {
      setFavourites((prev) => prev.filter((coin) => coin.name === name));
    } else {
      setFavourites((prev) => [...prev, { id, name, logo }]);
    }
  }

  return [favourites, handleFavourites] as const;
};

export default useFavourites;
