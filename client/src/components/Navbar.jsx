import { Link } from 'react-router-dom';
import { UserIcon } from '@heroicons/react/16/solid';

import { useContext } from 'react';
import { UserContext } from '../Contexts/UserContext';
import { Logout } from '../services/LogOutService';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const { loggedIn, setLoggedIn, userProfile } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const success = await Logout();
      if (success) {
        setLoggedIn(false);
        navigate('/');
      }
    } catch (error) {
      console.error('Error logging out: ', error);
    }
  };

  return (
    <>
      <div className='navbar bg-orange-950 '>
        <div className='navbar-start m-10'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <ul className='p-2 uppercase '>
                  <li>
                    <Link className=' hover:text-zinc-800'>Racer </Link>
                  </li>
                  <div className='divider divider-horizontal m-0'></div>
                  <li>
                    <Link className=' hover:text-zinc-800'>Gravel </Link>
                  </li>
                  <div className='divider divider-horizontal m-0'></div>
                  <li>
                    <Link className=' hover:text-zinc-800'>Mtb </Link>
                  </li>
                  <div className='divider divider-horizontal m-0'></div>
                  <li>
                    <Link className=' hover:text-zinc-800'>Women </Link>
                  </li>
                  <div className='divider divider-horizontal m-0'></div>
                  <li>
                    <Link className=' hover:text-zinc-800'>Beginners </Link>
                  </li>
                  <li>
                    <Link
                      to='auctionhub'
                      className='text-orange-400 hover:text-white'
                    >
                      Auction hub
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <Link to='/' className=' font-black text-4xl  text-orange-400'>
            VelóVente
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex m-10'>
          <ul className='menu menu-horizontal px-1 uppercase font-bold text-white text-xl'>
            <li>
              <Link to='racer' className=' hover:text-orange-400'>
                Racer{' '}
              </Link>
            </li>
            <div className='divider divider-horizontal m-0'></div>
            <li>
              <Link className=' hover:text-orange-400'>Gravel </Link>
            </li>
            <div className='divider divider-horizontal m-0'></div>
            <li>
              <Link className=' hover:text-orange-400'>Mtb </Link>
            </li>
            <div className='divider divider-horizontal m-0'></div>
            <li>
              <Link className=' hover:text-orange-400'>Women </Link>
            </li>
            <div className='divider divider-horizontal m-0'></div>
            <li>
              <Link className=' hover:text-orange-400'>Beginners </Link>
            </li>
            <div className='divider divider-horizontal m-0'></div>
            <li>
              <Link
                to='auctionhub'
                className='text-orange-400 hover:text-white'
              >
                Auction hub
              </Link>
            </li>
          </ul>
        </div>
        <div className='navbar-end m-10'>
          {loggedIn ? (
            <>
              <UserIcon className='h-6 w-6 text-orange-400 mr-1' />
              <Link to='/profile'>
                <span className='uppercase text-orange-200 font-bold text-xl mr-4'>
                  {userProfile.username}
                </span>
              </Link>
              <Link
                onClick={handleLogout}
                className=' hover:text-cyan-700 '
                to='/'
              >
                <span className='uppercase text-sm'>Log out</span>
              </Link>
            </>
          ) : (
            <Link to='/account/login' className='flex gap-2 text-xl'>
              <span className='uppercase'>My Account</span>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
