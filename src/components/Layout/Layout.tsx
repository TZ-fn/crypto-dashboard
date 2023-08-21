import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import MainView from '../MainView/MainView';

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
