import CoinListItem from './CoinListItem/CoinListItem';
import Coin from 'types/Coint';
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

      <table className='px-2 w-full max-w-6xl'>
        <thead>
          <tr className='flex flex-row px-6 py-8 pl-16 bg-bg-lighter-2 rounded hover:bg-bg-lighter cursor-pointer text-lg'>
            <th className='mr-auto'>#</th>
            <th className='mr-auto'>Name</th>
            <th className='mr-auto'>Price</th>
            <th className='mr-auto'>Volume (24h)</th>
          </tr>
        </thead>
        <tbody>
          {data.data.map(
            (
              {
                id,
                name,
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
