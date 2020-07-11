import React, { useState } from 'react';
import logo from '../../imgs/logo.svg';
import { Link } from 'react-router-dom';
import InfoIcon from '@material-ui/icons/Info';
import CallIcon from '@material-ui/icons/Call';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='nav'>
          <Link to='/'>
            <img alt='logo' src={logo} />
          </Link>
          <ul className='hide-sm'>
            <li>
              <Link to='/about'>
                <InfoIcon /> About us
              </Link>
            </li>
            <li>
              <Link to='/contact'>
                <CallIcon /> Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
