import useFavourites from 'hooks/useFavourites';

function Favourites() {
  const [favourites, setFavourites] = useFavourites();

  return (
    <div className='flex'>
      {favourites.map((favourite) => (
        <p>{favourite}</p>
      ))}
    </div>
  );
}

export default Favourites;
