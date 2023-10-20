import { useNavigate } from 'react-router-dom';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import useFavourites from 'hooks/useFavourites';
import StarIcon from 'assets/icons/starIcon.svg';

interface CoinListItemProps {
  index: number;
  logo: string | undefined;
  name: string;
  symbol: string;
  price: string;
  volume24h: string;
}

function CoinListItem({ index, logo, name, symbol, price, volume24h }: CoinListItemProps) {
  const navigate = useNavigate();
  const [favourites, handleFavourites] = useFavourites();

  const isInFavourites = favourites.some((favourite) => favourite.name === name);

  return (
    <tr
      // onClick={() => navigate(`details/${name.toLocaleLowerCase()}`)}
      className='cursor-pointer border-b-2 bg-bg-lighter text-center hover:bg-bg-lighter-2'
    >
      <td className='rounded-l px-1 py-6 sm:px-2 md:px-4 lg:px-12'>{index + 1}</td>
      <td className='px-0 py-6 sm:px-2 md:px-4 lg:px-12'>
        {logo ? <img className='min-w-[3rem] max-w-[2.6vw]' src={logo} alt='' /> : <LoadingSpinner />}
      </td>
      <td className='px-0 py-6 sm:px-2 md:px-4 lg:px-12'>
        {name} - {symbol}
      </td>
      <td className='px-0 py-6 sm:px-2 md:px-4 lg:px-12'>{price}</td>
      <td className='px-0 py-6 sm:px-2 md:px-4 lg:px-12'>{volume24h}</td>
      <td className='rounded-r px-1 py-6 sm:px-2 md:px-4 lg:px-12'>
        <button onClick={() => handleFavourites(index, name, logo)}>
          <span className='visually-hidden'>
            {isInFavourites ? 'Remove this item from the favourites.' : 'Add this item to the favourites.'}
          </span>
          <img
            src={StarIcon}
            className={`min-w-[2rem] max-w-[2.6vw] ${isInFavourites ? '' : 'grayscale'} `}
            alt='Star icon'
          />
        </button>
      </td>
    </tr>
  );
}

export default CoinListItem;
