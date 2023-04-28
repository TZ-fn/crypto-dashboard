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

  const {
    isFetching: metaIsFetching,
    error: metaError,
    data: meta,
  } = useQuery({
    queryKey: ['meta', coinIDs],
    queryFn: async () => {
      const response = await fetch(
        `https://crypto-dashboard-backend-5tas.onrender.com/info?id=${coinIDs}`,
      );
      const data = await response.json();
      return data;
    },
    enabled: !!coinIDs,
  });

  function getCoinLogo(coinID: number): string {
    return meta.data[coinID].logo;
  }

  if (isLoading || metaIsFetching) return <LoadingSpinner />;

  if (error || metaError)
    return (
      <p className='px-24 py-6 text-center text-lg bg-bg-lighter'>{`An error has occurred: ${
        error.message || metaError.message
      }`}</p>
    );

  return (
    <>
      {isFetching && (
        <p className='px-24 py-6 text-center text-lg bg-bg-lighter'>
          Updating ...
          <LoadingSpinner />
        </p>
      )}

      <table className='px-2 w-full max-w-6xl border-separate border-spacing-y-3'>
        <thead>
          <tr className='bg-bg-lighter-2 hover:bg-bg-lighter cursor-pointer text-lg'>
            <th className='px-12 py-7 text-left rounded-l'>#</th>
            <th className='px-12 py-7 text-left'>Logo</th>
            <th className='px-12 py-7 text-left'>Name and Symbol</th>
            <th className='px-12 py-7 text-left'>Price</th>
            <th className='px-12 py-7 text-left rounded-r'>Volume (24h)</th>
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
                logo={getCoinLogo(id)}
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
