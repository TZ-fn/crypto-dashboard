import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import MainView from '../MainView/MainView';
import CoinContextProvider from '~/providers/CoinContextProvider';

export default function Layout() {
  return (
    <>
      <Header />
      <MainView>
        <Outlet />
      </MainView>
    </>
  );
}
