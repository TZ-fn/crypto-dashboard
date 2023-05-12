import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import capitalise from 'utils/capitalise';
import CoinsContext from '~/context/CoinsContext';
import ContextType from '~/types/ContextType';

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

  function getCoinLogo(coinID: number): string | undefined {
    if (metaData) {
      return metaData.data[coinID].logo;
    }
  }

  return <div>CoinDetails: {params.name && capitalise(params.name)}</div>;
}

export default CoinDetails;
