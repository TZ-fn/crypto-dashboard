import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import FavouriteCoin from 'types/FavouriteCoin';

function FavouritesListElement({
  name,
  logo,
  deletingFunction,
}: Omit<FavouriteCoin, 'id'> & {
  deletingFunction: (name: string, logo?: string) => void;
}) {
  return (
    <li className='flex min-w-[14rem] items-center gap-4 border-b-[1px] border-solid border-border p-4  hover:bg-bg-lighter-2'>
      {logo ? <img className='min-w-[2rem] max-w-[1.5vw]' src={logo} alt='' /> : <LoadingSpinner />}
      <p>{name}</p>
      <button
        onClick={() => deletingFunction(name)}
        className='ml-auto border-[1px] border-solid border-[transparent] px-1.5 hover:border-border'
      >
        X
      </button>
    </li>
  );
}

export default FavouritesListElement;
