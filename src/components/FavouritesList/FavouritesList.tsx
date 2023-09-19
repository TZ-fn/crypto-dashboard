import useFavourites from 'hooks/useFavourites';

function FavouritesList() {
  const [favourites, setFavourites] = useFavourites();

  return (
    <div className='flex'>
      {favourites.map((favourite, index) => (
        <p key={index}>{favourite.name}</p>
      ))}
      <button
        className='mx-2'
        onClick={() => {
          if (typeof setFavourites === 'function') {
            setFavourites([{ id: 1, name: 'asd', logo: 'sdf' }]);
          }
        }}
      >
        asdaf
      </button>
    </div>
  );
}

export default FavouritesList;
