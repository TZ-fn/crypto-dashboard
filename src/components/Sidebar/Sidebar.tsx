import FavouritesList from '../FavouritesList/FavouritesList';

function Sidebar() {
  return (
    <aside className='flex flex-col items-center justify-center gap-4  py-9 min-[1650px]:fixed min-[1650px]:left-[3vw]'>
      <FavouritesList />
    </aside>
  );
}

export default Sidebar;
