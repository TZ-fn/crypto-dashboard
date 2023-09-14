import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import MainView from '../MainView/MainView';
import Sidebar from '../Sidebar/Sidebar';

export default function Layout() {
  return (
    <>
      <Header />
      <Sidebar />
      <MainView>
        <Outlet />
      </MainView>
    </>
  );
}
