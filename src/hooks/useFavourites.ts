import useLocalStorage from './useLocalStorage';
import FavouriteCoin from 'types/FavouriteCoin';

const useFavourites = () => {
  const [favourites, setFavourites] = useLocalStorage<FavouriteCoin[]>('favourites', []);
  return [favourites, setFavourites] as const;
};

export default useFavourites;
