import useLocalStorage from './useLocalStorage';

const useFavourites = () => {
  const [favourites, setFavourites] = useLocalStorage<FavouriteCoin[]>('favourites');
  return [favourites, setFavourites] as const;
};

export default useFavourites;
