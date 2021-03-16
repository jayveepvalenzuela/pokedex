import logo from '../media/logo.webp';

function Header() {
  return (
    <header className='sticky top-0 z-10 shadow-md bg-red-600'>
      <div className='container mx-auto p-5'>
        <a href='/'>
          <img className='w-6' src={logo} alt='Logo' />
        </a>
      </div>
    </header>
  );
}

export default Header;
