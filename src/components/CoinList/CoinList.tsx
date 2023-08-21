import { useEffect, useState } from 'react';
import CoinListItem from './CoinListItem/CoinListItem';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import useCoinContext from 'hooks/useCoinContext';
import formatCurrency from 'utils/formatCurrency';
import sortTable from 'utils/sortTable';
import SortTypeIndicator from 'components/SortTypeIndicator/SortTypeIndicator';
import Coin from 'types/Coin';

function CoinList() {
  const contextData = useCoinContext();
  const { isFetching, isLoading, data, error } = contextData.latestData;
  const { isFetching: metaIsFetching, metaData, error: metaError } = contextData.metaData;

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
    return metaData.data[coinID].logo;
  }

  const changeOrder =
    sortingStatus.direction === null
      ? 'descending'
      : sortingStatus.direction === 'descending'
      ? 'ascending'
      : null;

  if (isLoading || metaIsFetching || !data) return <LoadingSpinner />;

  if (error && error instanceof Error)
    return (
      <div className='sm:px-2 px-4 py-6 text-center text-lg bg-bg-lighter'>{`An error while fetching coin's data has occurred: ${error.message}`}</div>
    );

  if (metaError && metaError instanceof Error)
    return (
      <div className='sm:px-2 px-4 py-6 text-center text-lg bg-bg-lighter'>{`An error while fetching coin's logo has occurred: ${metaError.message}`}</div>
    );

  return (
    <>
      {isFetching && (
        <div className='sm:px-2 px-4 py-6 text-center text-lg bg-bg-lighter'>
          Updating ...
          <LoadingSpinner />
        </div>
      )}

      <table className='px-2 w-full max-w-6xl border-separate border-spacing-y-3 sm:text-base text-sm text-center'>
        <thead>
          <tr className='bg-bg-lighter-2 hover:bg-bg-lighter cursor-pointer'>
            <th className='lg:px-12 md:px-4 sm:px-2 px-1 py-7 select-none rounded-l'>#</th>
            <th className='lg:px-12 md:px-4 sm:px-2 px-0 py-7 select-none'>Logo</th>
            <th
              className='lg:px-12 md:px-4 sm:px-2 px-0 py-7 select-none'
              onClick={() => {
                setSortingStatus({ by: 'byName', direction: changeOrder });
                setSortedData(sortTable('byName', changeOrder, data));
              }}
            >
              Name and Symbol
              {sortingStatus.by === 'byName' && (
                <SortTypeIndicator type={sortingStatus.direction} />
              )}
            </th>
            <th
              className='lg:px-12 md:px-4 sm:px-2 px-0 py-7 select-none'
              onClick={() => {
                setSortingStatus({ by: 'byPrice', direction: changeOrder });
                setSortedData(sortTable('byPrice', changeOrder, data));
              }}
            >
              Price
              {sortingStatus.by === 'byPrice' && (
                <SortTypeIndicator type={sortingStatus.direction} />
              )}
            </th>
            <th
              className='lg:px-12 md:px-4 sm:px-2 px-1 py-7 select-none rounded-r'
              onClick={() => {
                setSortingStatus({ by: 'byVolume', direction: changeOrder });
                setSortedData(sortTable('byVolume', changeOrder, data));
              }}
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

export default CoinList;
