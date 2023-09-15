import useLocalStorage from './useLocalStorage';

const useFavourites = () => {
  const [favourites, setFavourites] = useLocalStorage('favourites', []);
  return [favourites, setFavourites];
};

export default useFavourites;
