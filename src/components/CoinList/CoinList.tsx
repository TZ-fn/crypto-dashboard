import CoinListItem from './CoinListItem/CoinListItem';
import Coin from '~/types/Coin';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import formatCurrency from 'utils/formatCurrency';

function CryptoList() {
  function getCoinLogo(coinID: number): string {
    return meta.data[coinID].logo;
  }

  if (isLoading || metaIsFetching) return <LoadingSpinner />;

  if (error && error instanceof Error)
    return (
      <p className='px-24 py-6 text-center text-lg bg-bg-lighter'>{`An error while fetching coin's data has occurred: ${error.message}`}</p>
    );

  if (metaError && metaError instanceof Error)
    return (
      <p className='px-24 py-6 text-center text-lg bg-bg-lighter'>{`An error while fetching coin's logo has occurred: ${metaError.message}`}</p>
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
                index={index}
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
