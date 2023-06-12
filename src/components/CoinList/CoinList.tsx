import { useContext, useEffect, useState } from 'react';
import CoinListItem from './CoinListItem/CoinListItem';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import formatCurrency from 'utils/formatCurrency';
import ContextType from 'types/ContextType';
import sortTable from 'utils/sortTable';
import SortTypeIndicator from 'components/SortTypeIndicator/SortTypeIndicator';
import CoinsContext from 'context/CoinsContext';
import Coin from 'types/Coin';

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

  const changeOrder =
    sortingStatus.direction === null
      ? 'descending'
      : sortingStatus.direction === 'descending'
      ? 'ascending'
      : null;

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
            <th className='px-12 py-7 text-left select-none rounded-l'>#</th>
            <th className='px-12 py-7 text-left select-none'>Logo</th>
            <th
              className='px-12 py-7 text-left select-none'
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
              className='px-12 py-7 text-left select-none'
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
              className='px-12 py-7 text-left select-none rounded-r'
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

export default CryptoList;
