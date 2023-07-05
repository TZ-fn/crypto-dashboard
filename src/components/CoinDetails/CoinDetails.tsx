import { useContext, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import CoinsContext from 'context/CoinsContext';
import capitalise from 'utils/capitalise';
import formatCurrency from 'utils/formatCurrency';
import ContextType from 'types/ContextType';
import PriceTrendIndicator from '../PriceTrendIndicator/PriceTrendIndicator';
import Coin from 'types/Coin';
import CoinMeta from '~/types/CoinMeta';

function CoinDetails() {
  let params = useParams();
  const contextData = useContext(CoinsContext) as ContextType;
  const { isLoading, data, error } = contextData.latestData;
  const { isLoading: metaIsLoading, metaData, error: metaError } = contextData.metaData;

  const currentCoinData: Coin = useMemo(() => {
    if (data) {
      return data.data.filter((coin: Coin) => {
        if (params.name) {
          return coin.name.toLocaleLowerCase() === params.name.toLocaleLowerCase();
        }
      })[0];
    }
  }, [data]);

  const currentCoinMetaData: CoinMeta = useMemo(() => {
    if (data && metaData) {
      return metaData.data[currentCoinData.id];
    }
  }, [metaData]);

  const getLinkFromDescription = (defaultDescription: string) => {
    const addressRegex =
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,12}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;

    const link = (href: string, address: string) => {
      return (
        <a className='underline' href={href}>
          {address}
        </a>
      );
    };

    const description = defaultDescription.replace(addressRegex, '');
    const addressMatch = defaultDescription.match(addressRegex);

    const href = addressMatch !== null ? addressMatch[0] : null;
    const address =
      addressMatch !== null ? addressMatch[0].replace(/(https|http)?(:\/+)?(\/\.+)?/g, '') : null;

    return (
      <>
        {description}
        {href && address ? link(href, address) : 'Address not available.'}
      </>
    );
  };

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
    <div className='lg:px-24 md:px-8 px-4 py-6 w-full flex items-center justify-center flex-col max-w-6xl gap-4 bg-bg-lighter rounded'>
      <h1 className='text-6xl'>{capitalise(params.name)}</h1>
      <img className='w-[5rem]' src={currentCoinMetaData.logo} alt='' />
      <p className='max-w-[60rem] text-l'>
        {getLinkFromDescription(currentCoinMetaData.description)}
      </p>
      <p>
        Subreddit:{' '}
        {currentCoinMetaData.urls.reddit[0] ? (
          <a className='underline' href={currentCoinMetaData.urls.reddit[0]}>
            {currentCoinMetaData.urls.reddit[0]}
          </a>
        ) : (
          ''
        )}
      </p>
      <p className='text-2xl flex items-center justify-center'>
        Current price: {formatCurrency(currentCoinData.quote.USD.price)}
        <PriceTrendIndicator trend={priceTrend} />
      </p>
    </div>
  );
}

export default CoinDetails;
