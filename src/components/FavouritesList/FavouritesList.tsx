import useFavourites from 'hooks/useFavourites';
import FavouritesListElement from './FavouritesListElement/FavouritesListElement';

function FavouritesList() {
  const [favourites, setFavourites] = useFavourites();

  const deleteFromFavourites = (name: string) => {
    setFavourites((prev) => prev.filter((item) => item.name !== name));
  };

  return (
    <ul className='flex flex-col'>
      {favourites.map(({ id, name, logo }) => (
        <FavouritesListElement
          key={name}
          name={name}
          logo={logo}
          deletingFunction={deleteFromFavourites}
        />
      ))}
      <button className='mx-2'>Click</button>
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
