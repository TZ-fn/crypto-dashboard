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

  function getCoinIDByName(coinName: string): number {
    return data.data.filter((coin: Coin) => coin.name === capitalise(coinName))[0].id;
  }

  function getCoinLogoByID(ID: number): string {
    return metaData.data[ID].logo;
  }

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
  return (
    <div className='px-24 py-6 flex items-center justify-center flex-col gap-4 bg-bg-lighter rounded'>
      <h1 className='text-4xl'>{capitalise(params.name)}</h1>
      <img className='w-[5rem]' src={getCoinLogoByID(getCoinIDByName(params.name))} alt='' />
    </div>
  );
}

export default CoinDetails;
