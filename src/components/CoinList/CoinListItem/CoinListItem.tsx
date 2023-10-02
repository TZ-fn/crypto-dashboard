import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '~/components/LoadingSpinner/LoadingSpinner';

interface CoinListItemProps {
  index: number;
  logo: string | null;
  name: string;
  symbol: string;
  price: string;
  volume24h: string;
  handleFavourites: (
    id: number,
    name: string,
    logo: string | null,
    e: MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
}

function CoinListItem({
  index,
  logo,
  name,
  symbol,
  price,
  volume24h,
  handleFavourites,
}: CoinListItemProps) {
  const navigate = useNavigate();

  return (
    <tr
      // onClick={() => navigate(`details/${name.toLocaleLowerCase()}`)}
      className='cursor-pointer border-b-2 bg-bg-lighter text-center hover:bg-bg-lighter-2'
    >
      <td className='rounded-l px-1 py-6 sm:px-2 md:px-4 lg:px-12'>{index + 1}</td>
      <td className='px-0 py-6 sm:px-2 md:px-4 lg:px-12'>
        {logo ? (
          <img className='min-w-[3rem] max-w-[2.6vw]' src={logo} alt='' />
        ) : (
          <LoadingSpinner />
        )}
      </td>
      <td className='px-0 py-6 sm:px-2 md:px-4 lg:px-12'>
        {name} - {symbol}
      </td>
      <td className='px-0 py-6 sm:px-2 md:px-4 lg:px-12'>{price}</td>
      <td className='rounded-r px-1 py-6 sm:px-2 md:px-4 lg:px-12'>{volume24h}</td>
      <td className='rounded-r px-1 py-6 sm:px-2 md:px-4 lg:px-12'>
        <button onClick={(e) => handleFavourites(index, name, logo, e)}>Favourites</button>
      </td>
    </tr>
  );
}

export default CoinListItem;
