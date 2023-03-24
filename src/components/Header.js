import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex justify-between bg-red-500'>
         <Link to = '/'><img className='w-96 m-2 p-2' src='http://d1d6x43owzjgqt.cloudfront.net/0/admin_v1/application_management/clientlogo/155301782_IMG-20220714-WA0023.jpg' alt='logo'/></Link>
        <div className='flex justify-around m-2 p-2 font-semibold text-lg'>
            <button className='px-4'><Link to = '/'>Home</Link></button>
            <button className='px-4'>About Us</button>
            <button className='px-4'>Profile</button>
        </div>
    </div>
  )
}

export default Header