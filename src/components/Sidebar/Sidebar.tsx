import FavouritesList from '../FavouritesList/FavouritesList';

function Sidebar() {
  return (
    <aside className='flex flex-col items-center justify-center gap-4 pt-8 min-[1750px]:fixed min-[1750px]:left-[3vw]'>
      <FavouritesList />
    </aside>
  );
}

export default Sidebar;
