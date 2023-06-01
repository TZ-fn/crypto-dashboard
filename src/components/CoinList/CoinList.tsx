import { useContext, useEffect, useState } from 'react';
import CoinListItem from './CoinListItem/CoinListItem';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import formatCurrency from 'utils/formatCurrency';
import CoinsContext from 'context/CoinsContext';
import Coin from 'types/Coin';
import ContextType from 'types/ContextType';
import SortTypeIndicator from 'components/SortTypeIndicator/SortTypeIndicator';

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
  const [sortingStatus, setSortingStatus] = useState<{
    by: null | 'byName' | 'byPrice' | 'byVolume';
    direction: null | 'ascending' | 'descending';
  }>({
    by: null,
    direction: null,
  });

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

    sortingStatus.direction === null
      ? setSortingStatus({ by: sortBy, direction: 'descending' })
      : sortingStatus.direction === 'descending'
      ? setSortingStatus({ by: sortBy, direction: 'ascending' })
      : setSortingStatus({ by: sortBy, direction: null });

    if (sortBy === 'byName') {
      sortedData = [...data.data].sort((coin1: Coin, coin2: Coin) =>
        new Intl.Collator('en').compare(coin1.name, coin2.name),
      );
    }
    if (sortBy === 'byPrice') {
      sortedData = [...data.data].sort(
        (coin1: Coin, coin2: Coin) => coin2.quote.USD.price - coin1.quote.USD.price,
      );
    }
    if (sortBy === 'byVolume') {
      sortedData = [...data.data].sort(
        (coin1: Coin, coin2: Coin) => coin2.quote.USD.volume_24h - coin1.quote.USD.volume_24h,
      );
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
              {sortingStatus.by === 'byName' && (
                <SortTypeIndicator type={sortingStatus.direction} />
              )}
            </th>
            <th
              className='px-12 py-7 text-left'
              onClick={() => setSortedData(sortTable('byPrice'))}
            >
              Price
              {sortingStatus.by === 'byPrice' && (
                <SortTypeIndicator type={sortingStatus.direction} />
              )}
            </th>
            <th
              className='px-12 py-7 text-left rounded-r'
              onClick={() => setSortedData(sortTable('byVolume'))}
            >
              Volume (24h)
              {sortingStatus.by === 'byVolume' && (
                <SortTypeIndicator type={sortingStatus.direction} />
              )}
            </th>
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
