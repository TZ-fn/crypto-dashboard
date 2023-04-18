import CoinListItem from './CoinListItem/CoinListItem';
import Coin from 'types/Coint';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

function CryptoList() {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ['latest'],
    queryFn: async () => {
      const response = await fetch('https://crypto-dashboard-backend-5tas.onrender.com/latest');
      const data = await response.json();
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <ul className='px-2 min-w-full border border-border rounded'>
      {data.data.map(
        ({
          id,
          name,
          quote: {
            USD: { price, volume_24h },
          },
        }: Coin) => (
          <CoinListItem key={id} name={name} price={price} volume24h={volume_24h} />
        ),
      )}
    </ul>
  );
}

export default CryptoList;
