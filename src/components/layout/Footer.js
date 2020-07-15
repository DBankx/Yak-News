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
                <a
                  href='https://www.facebook.com/damilola.hundeyin'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FacebookIcon
                    style={{ fontSize: '40px', color: '#3B5998' }}
                  />
                </a>
              </li>
              <li>
                <a
                  href='https://www.twitter.com/DBankx1'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <TwitterIcon style={{ fontSize: '40px', color: '#00ACEE' }} />
                </a>
              </li>
              <li>
                <a
                  href='https://www.instagram.com/Dbankx1'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <InstagramIcon
                    style={{
                      fontSize: '40px',
                      color: 'DD2A7B'
                    }}
                  />
                </a>
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
