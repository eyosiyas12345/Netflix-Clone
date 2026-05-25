import netflixLogo from '../assets/netflix-logo.png';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <nav className="bg-gray-900 text-white flex justify-between items-center  p-4">
      {/* right section */}
        <div>
          <div className = "flex gap-4">
            <a><img src={netflixLogo} alt="Netflix Logo" className="h-8 " /></a>
            <a className='cursor-pointer hover:text-red-400'>Home</a>
            <a className='cursor-pointer hover:text-red-400'>TV Shows</a>
            <a className='cursor-pointer hover:text-red-400'>Movies</a>
            <a className='cursor-pointer hover:text-red-400'>Latest</a>
            <a className='cursor-pointer hover:text-red-400'>My List</a>
            <a className='cursor-pointer hover:text-red-400'>Watch Later</a>
            <a className='cursor-pointer hover:text-red-400'>Settings</a>
          </div>
        </div>
        {/* left section */}
        <div>
         <SearchIcon/>
        </div>

    </nav>
  );
}

export default Header