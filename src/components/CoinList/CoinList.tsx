import { useEffect, useState, MouseEvent } from 'react';
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

  function getCoinLogo(coinID: number) {
    return metaData.data[coinID]?.logo || undefined;
  }

  let changeOrder =
    sortingStatus.direction === null ? 'descending' : sortingStatus.direction === 'descending' ? 'ascending' : null;

  if (isLoading || metaIsFetching || !data) return <LoadingSpinner />;

  if (error && error instanceof Error)
    return (
      <div className='bg-bg-lighter px-4 py-6 text-center text-lg sm:px-2'>{`An error while fetching coin's data has occurred: ${error.message}`}</div>
    );

  if (metaError && metaError instanceof Error)
    return (
      <div className='bg-bg-lighter px-4 py-6 text-center text-lg sm:px-2'>{`An error while fetching coin's logo has occurred: ${metaError.message}`}</div>
    );

  return (
    <>
      {isFetching && (
        <div className='bg-bg-lighter px-4 py-6 text-center text-lg sm:px-2'>
          Updating ...
          <LoadingSpinner />
        </div>
      )}

      <table className='w-full max-w-6xl border-separate border-spacing-y-3 px-2 text-center text-sm sm:text-base'>
        <thead>
          <tr className='bg-bg-lighter-2 hover:bg-bg-lighter'>
            <th className='select-none rounded-l px-1 py-7 sm:px-2 md:px-4 lg:px-12'>#</th>
            <th className='select-none px-0 py-7 sm:px-2 md:px-4 lg:px-12'>Logo</th>
            <th
              className='cursor-pointer select-none px-0 py-7 sm:px-2 md:px-4 lg:px-12'
              onClick={() => {
                if (sortingStatus.by !== 'byName') {
                  changeOrder = 'descending';
                }

                setSortingStatus({ by: 'byName', direction: changeOrder });
                setSortedData(sortTable('byName', changeOrder, data));
              }}
            >
              Name and Symbol
              {sortingStatus.by === 'byName' && <SortTypeIndicator type={sortingStatus.direction} />}
            </th>
            <th
              className='cursor-pointer select-none px-0 py-7 sm:px-2 md:px-4 lg:px-12'
              onClick={() => {
                if (sortingStatus.by !== 'byPrice') {
                  changeOrder = 'descending';
                }
                setSortingStatus({ by: 'byPrice', direction: changeOrder });
                setSortedData(sortTable('byPrice', changeOrder, data));
              }}
            >
              Price
              {sortingStatus.by === 'byPrice' && <SortTypeIndicator type={sortingStatus.direction} />}
            </th>
            <th
              className=' cursor-pointer select-none px-0 py-7 sm:px-2 md:px-4 lg:px-12'
              onClick={() => {
                if (sortingStatus.by !== 'byVolume') {
                  changeOrder = 'descending';
                }
                setSortingStatus({ by: 'byVolume', direction: changeOrder });
                setSortedData(sortTable('byVolume', changeOrder, data));
              }}
            >
              Volume (24h)
              {sortingStatus.by === 'byVolume' && <SortTypeIndicator type={sortingStatus.direction} />}
            </th>
            <th className='select-none rounded-r px-1 py-7 sm:px-2 md:px-4 lg:px-12'>Favourite</th>
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
