import FavouritesList from '../FavouritesList/FavouritesList';

function Sidebar() {
  return (
    <aside className='flex flex-col items-center justify-center gap-4 rounded bg-bg-lighter px-4 py-6 min-[1850px]:fixed min-[1850px]:left-[3vw] min-[1850px]:top-64 '>
      <FavouritesList />
    </aside>
  );
}

export default Sidebar;
