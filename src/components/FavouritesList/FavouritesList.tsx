import { useState } from 'react';
import { motion, AnimatePresence, animate } from 'framer-motion';
import useFavourites from 'hooks/useFavourites';
import FavouritesListElement from './FavouritesListElement/FavouritesListElement';
import SortTypeIndicator from '../SortTypeIndicator/SortTypeIndicator';

function FavouritesList() {
  const [favourites, setFavourites] = useFavourites();
  const [isListVisible, setIsListVisible] = useState(true);

  const sortedFavourites = favourites.sort((coin1, coin2) => new Intl.Collator('en').compare(coin1.name, coin2.name));

  return favourites.length > 0 ? (
    <div className='flex flex-col'>
      <div className='flex min-w-[14rem] select-none justify-between rounded bg-bg-lighter-2 p-2 text-center font-bold sm:p-2 md:p-5 lg:p-6'>
        <h2>Favourites</h2>
        <button onClick={() => setIsListVisible((prev) => !prev)}>
          <SortTypeIndicator type={isListVisible ? 'ascending' : 'descending'} />
          {isListVisible}
        </button>
      </div>

      <AnimatePresence>
        {isListVisible && (
          <div className='overflow-hidden'>
            <motion.ul
              initial={{ opacity: 0, y: '-20rem' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '-20rem' }}
              transition={{ duration: 0.3 }}
            >
              {sortedFavourites.map(({ id, name, logo }) => (
                <FavouritesListElement id={id} key={name} name={name} logo={logo} deletingFunction={setFavourites} />
              ))}
            </motion.ul>
          </div>
        )}
      </AnimatePresence>
    </div>
  ) : null;
}

export default FavouritesList;
