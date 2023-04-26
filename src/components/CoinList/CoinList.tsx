import CoinListItem from './CoinListItem/CoinListItem';
import Coin from '~/types/Coin';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import formatCurrency from 'utils/formatCurrency';

function CryptoList() {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ['latest'],
    queryFn: async () => {
      const response = await fetch('https://crypto-dashboard-backend-5tas.onrender.com/latest');
      const data = await response.json();
      return data;
    },
  });

  const coinIDs = data?.data.map((coin: Coin) => coin.id).join(',');

  if (isLoading) return <LoadingSpinner />;

  if (error) return <p>{`An error has occurred: ${error.message}`}</p>;

  return (
    <>
      {isFetching && <p>Updating ...</p>}

      <table className='px-2 w-full max-w-6xl border-separate border-spacing-y-3'>
        <thead>
          <tr className='bg-bg-lighter-2 rounded hover:bg-bg-lighter cursor-pointer text-lg'>
            <th className='px-12 py-6 text-left'>#</th>
            <th className='px-12 py-6 text-left'>Name and Symbol</th>
            <th className='px-12 py-6 text-left'>Price</th>
            <th className='px-12 py-6 text-left'>Volume (24h)</th>
          </tr>
        </thead>
        <tbody>
          {data.data.map(
            (
              {
                id,
                name,
                symbol,
                quote: {
                  USD: { price, volume_24h },
                },
              }: Coin,
              index: number,
            ) => (
              <CoinListItem
                key={id}
                index={index + 1}
                name={name}
                symbol={symbol}
                price={formatCurrency(price)}
                volume24h={formatCurrency(volume_24h)}
              />
            ),
          )}
        </tbody>
      </table>
    </>
  );
}

export default CryptoList;
