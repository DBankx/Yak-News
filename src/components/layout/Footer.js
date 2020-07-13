import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from 'react-router-dom';

const Footer = (props) => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='footer-title'>
          <h3>Find us here</h3>
          <hr />
        </div>
        <div className='all'>
          <div className='footer-body'>
            <ul>
              <li>
                <FacebookIcon style={{ fontSize: '40px', color: '#3B5998' }} />
              </li>
              <li>
                <TwitterIcon style={{ fontSize: '40px', color: '#00ACEE' }} />
              </li>
              <li>
                <InstagramIcon
                  style={{
                    fontSize: '40px',
                    color: 'DD2A7B'
                  }}
                />
              </li>
            </ul>
            <div className='footer-body-text'>
              <p>
                Email us at: <strong>loldondo@gmail.com</strong>
              </p>
              <Link className='last-link' to='/about'>
                About yak-News
              </Link>
              <Link className='last-link' to='/contact'>
                Contact us
              </Link>
            </div>
          </div>

          <p className='last-text'>
            &copy; copyright 2020 • All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
