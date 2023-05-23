import { useContext, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import CoinsContext from 'context/CoinsContext';
import capitalise from 'utils/capitalise';
import formatCurrency from 'utils/formatCurrency';
import Coin from 'types/Coin';
import ContextType from 'types/ContextType';
import PriceTrendIndicator from '../PriceTrendIndicator/PriceTrendIndicator';

function CoinDetails() {
  let params = useParams();
  const contextData = useContext(CoinsContext) as ContextType;
  const { isFetching, isLoading, data, error } = contextData.latestData;
  const {
    isFetching: metaIsFetching,
    isLoading: metaIsLoading,
    metaData,
    error: metaError,
  } = contextData.metaData;

  const currentCoinData = useMemo(() => {
    if (data) {
      return data.data.filter((coin: Coin) => {
        if (params.name) {
          return coin.name.toLocaleLowerCase() === params.name.toLocaleLowerCase();
        }
      })[0];
    }
  }, [data]);

  const currentCoinMetaData = useMemo(() => {
    if (data && metaData) {
      return metaData.data[currentCoinData.id];
    }
  }, [metaData]);

  if (isLoading || metaIsLoading) return <LoadingSpinner />;

  if (error && error instanceof Error) {
    return (
      <div className='px-24 py-6 text-center text-lg bg-bg-lighter'>{`An error while fetching coin's data has occurred: ${error.message}`}</div>
    );
  }

  if (metaError && metaError instanceof Error) {
    return (
      <div className='px-24 py-6 text-center text-lg bg-bg-lighter'>{`An error while fetching coin's logo has occurred: ${metaError.message}`}</div>
    );
  }

  if (!params.name) {
    return (
      <div className='px-24 py-6 text-center text-lg bg-bg-lighter'>
        Please select a coin to get it's details.
      </div>
    );
  }

  const priceTrend = currentCoinData.quote.USD.percent_change_24h > 0 ? 'up' : 'down';

  return (
    <div className='px-24 py-6 w-full flex items-center justify-center flex-col gap-4 bg-bg-lighter rounded'>
      <h1 className='text-6xl'>{capitalise(params.name)}</h1>
      <img className='w-[5rem]' src={currentCoinMetaData.logo} alt='' />
      <p className='max-w-[60rem] text-l'>{currentCoinMetaData.description}</p>
      <p className='text-2xl flex items-center justify-center'>
        Current price: {formatCurrency(currentCoinData.quote.USD.price)}
        <PriceTrendIndicator trend={priceTrend} />
      </p>
    </div>
  );
}

export default CoinDetails;
