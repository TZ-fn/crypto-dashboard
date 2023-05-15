import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import capitalise from 'utils/capitalise';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import CoinsContext from 'context/CoinsContext';
import Coin from 'types/Coin';
import ContextType from 'types/ContextType';

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

  function getCoinLogoByName(coinName: string): string | undefined {
    if (metaData) {
      return metaData.data.filter((coin: Coin) => coin.name === capitalise(coinName));
    }
  }

  if (isLoading || metaIsLoading) return <LoadingSpinner />;

  if (error && error instanceof Error)
    return (
      <div className='px-24 py-6 text-center text-lg bg-bg-lighter'>{`An error while fetching coin's data has occurred: ${error.message}`}</div>
    );

  if (metaError && metaError instanceof Error)
    return (
      <div className='px-24 py-6 text-center text-lg bg-bg-lighter'>{`An error while fetching coin's logo has occurred: ${metaError.message}`}</div>
    );

  console.log(metaData.data[1]);
  return (
    <div className=''>
      {params.name !== undefined && (
        <img src={getCoinLogoByName(getCoinLogoByName(capitalise(params.name)))} alt='' />
      )}
      <h1>{params.name && capitalise(params.name)}</h1>
    </div>
  );
}

export default CoinDetails;
