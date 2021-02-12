import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  //route path
  const location = useLocation();
  const path = location.pathname;
  console.log(path);
  //Get State
  const [openMenu, setOpenMenu] = useState(false);
  const [openSmallMenu, setOpenSmallMenu] = useState(false);

  //Redux Selector
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  //Redux Dishpatch
  const dispatch = useDispatch();

  //HANDLERS
  const logoutHandler = () => {
    dispatch(logout());
  };
  // HTML CONTENT
  const adminPanel = (
    <a
      href='/'
      className='text-decoration-none block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
      role='menuitem'
    >
      Users
    </a>
  );
  const mobileAdminPanel = (
    <a
      href='/'
      className='text-decoration-none block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100'
    >
      Users
    </a>
  );
  const profileDropdown = (
    <div className='ml-3 relative'>
      <div>
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className='bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          id='user-menu'
          aria-haspopup='true'
        >
          <span className='sr-only'>Open user menu</span>
          <img
            className='h-8 w-8 rounded-full'
            src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
            alt=''
          />
        </button>
      </div>
      <div
        className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 
          ${openMenu ? ' ' : ' hidden'}
      `}
        role='menu'
        aria-orientation='vertical'
        aria-labelledby='user-menu'
      >
        <Link
          to='/profile'
          className='text-decoration-none block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
          role='menuitem'
        >
          Your Profile
        </Link>
        {userInfo && userInfo.isAdmin && adminPanel}
        <a
          href='/'
          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
          role='menuitem'
          onClick={logoutHandler}
        >
          Sign out
        </a>
      </div>
    </div>
  );

  const signIn = (
    <Link
      to='/login'
      className={`${
        path === '/login'
          ? 'border-indigo-500 text-gray-900'
          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
      } text-decoration-none inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
    >
      Sign In
    </Link>
  );

  const mainMenu = (
    <div className={`hidden sm:ml-6 sm:flex sm:items-center`}>
      <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
        {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
        <Link
          to='/'
          className={`${
            path === '/'
              ? 'border-indigo-500 text-gray-900'
              : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
          } text-decoration-none inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
        >
          Home
        </Link>
        <Link
          to='/team'
          className={`${
            path === '/team'
              ? 'border-indigo-500 text-gray-900'
              : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
          } text-decoration-none inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
        >
          Team
        </Link>
        <Link
          to='/projects'
          className={`${
            path === '/projects'
              ? 'border-indigo-500 text-gray-900'
              : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
          } text-decoration-none inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
        >
          Projects
        </Link>
        <Link
          to='/calendar'
          className={`${
            path === '/calendar'
              ? 'border-indigo-500 text-gray-900'
              : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
          } text-decoration-none inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
        >
          Calendar
        </Link>
        {!userInfo && signIn}
      </div>

      {/* Profile dropdown */}
      {userInfo && profileDropdown}
    </div>
  );

  const mobileMainMenu = (
    <div className='pt-2 pb-3 space-y-1'>
      {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
      <Link
        to='/'
        className='text-decoration-none bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
      >
        Home
      </Link>
      <Link
        to='/team'
        className='text-decoration-none border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
      >
        Team
      </Link>
      <Link
        to='/projects'
        className='text-decoration-none border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
      >
        Projects
      </Link>
      <Link
        to='/calendar'
        className='text-decoration-none border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
      >
        Calendar
      </Link>
    </div>
  );

  const mobileDropdownMeny = (
    <div className='pt-4 pb-3 border-t border-gray-200'>
      <div className='flex items-center px-4'>
        <div className='flex-shrink-0'>
          <img
            className='h-10 w-10 rounded-full'
            src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
            alt=''
          />
        </div>
        <div className='ml-3'>
          <div className='text-base font-medium text-gray-800 capitalize'>
            {userInfo && userInfo.name}
          </div>
          <div className='text-sm font-medium text-gray-500'>
            {userInfo && userInfo.email}
          </div>
        </div>
      </div>
      <div className='mt-3 space-y-1'>
        <Link
          to='/profile'
          className='text-decoration-none block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100'
        >
          Your Profile
        </Link>
        {userInfo && userInfo.isAdmin && mobileAdminPanel}
        <a
          href='/'
          className='text-decoration-none block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100'
          onClick={logoutHandler}
        >
          Sign out
        </a>
      </div>
    </div>
  );

  const mobileButton = (
    <div className='-mr-2 flex items-center sm:hidden'>
      {/* Mobile menu button */}
      <button
        onClick={() => setOpenSmallMenu(!openSmallMenu)}
        className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
        aria-expanded='false'
      >
        <span className='sr-only'>Open main menu</span>
        {/* Icon when menu is closed. */}
        <svg
          className='block h-6 w-6'
          // data-todo-x-description='Heroicon name: menu'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          aria-hidden='true'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          ></path>
        </svg>
        {/* Icon when menu is open. */}
        <svg
          className='hidden h-6 w-6'
          // data-todo-x-description='Heroicon name: x'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          aria-hidden='true'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M6 18L18 6M6 6l12 12'
          ></path>
        </svg>
      </button>
    </div>
  );

  return (
    <nav data-todo-x-data='{ open: false }' className='bg-white shadow'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex'>
            <div className='flex-shrink-0 flex items-center uppercase'>
              Starter
            </div>
          </div>
          {mainMenu}
          {mobileButton}
        </div>
      </div>
      <div className={`sm:hidden ${openSmallMenu ? 'block' : ' hidden'}`}>
        {mobileMainMenu}
        {mobileDropdownMeny}
      </div>
    </nav>
  );
};
export default Header;
