import useFavourites from 'hooks/useFavourites';

function Favourites() {
  const [favourites, setFavourites] = useFavourites();

  return (
    <div className='flex'>
      {favourites.map((favourite, index) => (
        <p key={index}>{favourite}</p>
      ))}
      <button
        className='mx-2'
        onClick={() => {
          if (typeof setFavourites === 'function') {
            setFavourites([1, 2, 3, 4, 5]);
          }
        }}
      >
        asdaf
      </button>
    </div>
  );
}

export default Favourites;
