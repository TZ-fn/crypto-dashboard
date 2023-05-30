import { useContext, useEffect, useState } from 'react';
import CoinListItem from './CoinListItem/CoinListItem';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import formatCurrency from 'utils/formatCurrency';
import CoinsContext from 'context/CoinsContext';
import Coin from 'types/Coin';
import ContextType from 'types/ContextType';

function CryptoList() {
  const contextData = useContext(CoinsContext) as ContextType;
  const { isFetching, isLoading, data, error } = contextData.latestData;
  const {
    isFetching: metaIsFetching,
    isLoading: metaIsLoading,
    metaData,
    error: metaError,
  } = contextData.metaData;

  const [sortedData, setSortedData] = useState<null | Coin[]>(null);

  useEffect(() => {
    if (data) {
      setSortedData(data.data);
    }
  }, [data]);

  function getCoinLogo(coinID: number): string | undefined {
    if (metaData) {
      return metaData.data[coinID].logo;
    }
  }

  type sortingTypes = 'byName' | 'byPrice' | 'byVolume';

  function sortTable(sortBy: sortingTypes): Coin[] {
    let sortedData;
    if (sortBy === 'byName') {
      sortedData = [...data.data].sort((coin1: Coin, coin2: Coin) =>
        new Intl.Collator('en').compare(coin1.name, coin2.name),
      );
    }
    if (sortBy === 'byPrice') {
    }
    if (sortBy === 'byVolume') {
    }
    return sortedData as Coin[];
  }

  if (isLoading || metaIsFetching) return <LoadingSpinner />;

  if (error && error instanceof Error)
    return (
      <div className='px-24 py-6 text-center text-lg bg-bg-lighter'>{`An error while fetching coin's data has occurred: ${error.message}`}</div>
    );

  if (metaError && metaError instanceof Error)
    return (
      <div className='px-24 py-6 text-center text-lg bg-bg-lighter'>{`An error while fetching coin's logo has occurred: ${metaError.message}`}</div>
    );

  return (
    <>
      {isFetching && (
        <div className='px-24 py-6 text-center text-lg bg-bg-lighter'>
          Updating ...
          <LoadingSpinner />
        </div>
      )}

      <table className='px-2 w-full max-w-6xl border-separate border-spacing-y-3'>
        <thead>
          <tr className='bg-bg-lighter-2 hover:bg-bg-lighter cursor-pointer text-lg'>
            <th className='px-12 py-7 text-left rounded-l'>#</th>
            <th className='px-12 py-7 text-left'>Logo</th>
            <th className='px-12 py-7 text-left' onClick={() => setSortedData(sortTable('byName'))}>
              Name and Symbol
            </th>
            <th className='px-12 py-7 text-left'>Price</th>
            <th className='px-12 py-7 text-left rounded-r'>Volume (24h)</th>
          </tr>
        </thead>
        <tbody>
          {sortedData &&
            sortedData.map(
              (
                {
                  id,
                  name,
                  symbol,
                  quote: {
                    USD: { price, volume_24h },
                  },
                },
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
