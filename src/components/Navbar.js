import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <>
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto h-10 px-4 flex items-center align-middle justify-between sm:px-6 lg:px-8">
          <p className="m-auto text-white bold">Free shipping on orders above $10000</p>
        </div>
      </div>

      <header className="bg-sky-700">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-6 flex items-center justify-between border-b border-sky-600 lg:border-none">
            <div className="flex items-center">
              <Link to="/" className="flex items-center text-white">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                  />
                </svg>
                <span className="font-bold ml-2">CH Carrito</span>
              </Link>

              <div className="hidden ml-10 space-x-8 lg:block">
                <Link to="category/collectables" className="text-base font-medium text-white hover:text-sky-200">
                  Collectables
                </Link>
                <Link to="category/comics" className="text-base font-medium text-white hover:text-sky-200">
                  Comics
                </Link>
              </div>
            </div>

            <div className="ml-10 space-x-4">
              <CartWidget />
            </div>
          </div>

          <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
            <Link to="category/collectables" className="text-base font-medium text-white hover:text-sky-200">
              Collectables
            </Link>
            <Link to="category/comics" className="text-base font-medium text-white hover:text-sky-200">
              Comics
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
