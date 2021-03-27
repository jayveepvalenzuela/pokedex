import SearchBar from './SearchBar';
import logo from '../media/logo.webp';

function Header() {
  return (
    <header className='sticky top-0 z-10 shadow-md bg-red-600'>
      <div className='flex justify-between items-center container mx-auto p-5'>
        <a href='/'>
          <img className='inline w-6' src={logo} alt='Logo' />
        </a>
        <SearchBar />
      </div>
    </header>
  );
}

export default Header;
