import { ReactNode } from 'react';

function MainView({ children }: { children: ReactNode }) {
  const COINMARKETCAP_API_KEY = import.meta.env.VITE_COINMARKETCAP_API_KEY;

  async function getData() {
    try {
      const res = await fetch(
        'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
        {
          headers: {
            'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c',
          },
          mode: 'no-cors',
        },
      );
      const data = await res.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }

  getData();

  return <div className='px-96 py-12'>{children}</div>;
}

export default MainView;
