import CoinListItem from './CoinListItem/CoinListItem';
import Coin from 'types/Coint';
import { useQuery } from '@tanstack/react-query';

function CryptoList() {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ['latest'],
    queryFn: async () => {
      const response = await fetch('https://crypto-dashboard-backend-5tas.onrender.com/latest');
      const data = await response.json();
      return data;
    },
  });

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <ul className='px-2 border border-border rounded'>
      {data.data.map(({ name, id }: Coin) => (
        <CoinListItem key={id} name={name} />
      ))}
    </ul>
  );
}

export default CryptoList;
