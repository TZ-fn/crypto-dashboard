import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import capitalise from 'utils/capitalise';
import CoinsContext from '~/context/CoinsContext';

function CoinDetails() {
  let params = useParams();
  const data = useContext(CoinsContext);

  return <div>CoinDetails: {params.name && capitalise(params.name)}</div>;
}

export default CoinDetails;
