import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';

function FavouritesListElement({
  name,
  logo,
  deletingFunction,
}: Omit<FavouriteCoin, 'id'> & { deletingFunction: (name: string) => void }) {
  return (
    <li className='m-2 flex items-center gap-4 border-b-[1px] border-solid border-border py-1'>
      {logo ? <img className='min-w-[2rem] max-w-[1.5vw]' src={logo} alt='' /> : <LoadingSpinner />}
      <p>{name}</p>
      <button
        onClick={() => deletingFunction(name)}
        className='border-[1px] border-solid border-[transparent] px-1.5 hover:border-border'
      >
        X
      </button>
    </li>
  );
}

export default FavouritesListElement;
