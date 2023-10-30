import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import FavouriteCoin from 'types/FavouriteCoin';

function FavouritesListElement({
  id,
  name,
  logo,
  deletingFunction,
}: FavouriteCoin & {
  deletingFunction: (id: number, name: string, logo?: string) => void;
}) {
  const navigate = useNavigate();

  return (
    <motion.li
      initial={{ x: '-20rem' }}
      animate={{ x: 0 }}
      exit={{ x: '20rem' }}
      transition={{ duration: 0.3 }}
      className='xs:p-2 my-3 flex min-w-[14rem] cursor-pointer items-center gap-4 rounded bg-bg-lighter p-2 hover:bg-bg-lighter-2 sm:p-2 md:p-4 lg:p-4'
      onClick={() => navigate(`details/${name.toLocaleLowerCase()}`)}
    >
      {logo ? <img className='min-w-[2rem] max-w-[1.5vw]' src={logo} alt='' /> : <LoadingSpinner />}
      <p>{name}</p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          deletingFunction(id, name);
        }}
        className='ml-auto border-[1px] border-solid border-[transparent] px-1.5 hover:border-border'
      >
        X
      </button>
    </motion.li>
  );
}

export default FavouritesListElement;
