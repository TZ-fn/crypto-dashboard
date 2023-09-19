import useLocalStorage from './useLocalStorage';

type FavouriteCoin = {
  id: number;
  name: string;
  logo: string;
};

const useFavourites = () => {
  const [favourites, setFavourites] = useLocalStorage<FavouriteCoin[]>('favourites', []);
  return [favourites, setFavourites] as const;
};

export default useFavourites;
