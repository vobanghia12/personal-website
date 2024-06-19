import React from 'react';
import Box from './Box';

const NavBar = () => {
  return (
    <nav className='flex justify-center items-center mt-10'>
      <Box className='rounded-full p-3 w-[20rem] bg-[#ffffff16]'>
        <ul className='flex items-center justify-evenly text-[#FAFAFA] font-light'>
          <li>projects</li>
          <li>notes</li>
          <li>about</li>
        </ul>
      </Box>
    </nav>
  );
};

export default NavBar;
