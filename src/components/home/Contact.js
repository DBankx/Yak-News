import React from 'react';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import DraftsIcon from '@material-ui/icons/Drafts';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import CallIcon from '@material-ui/icons/Call';

const Contact = () => {
  return (
    <div className='container'>
      <div className='contact-info'>
        <h2>Contact us using various forms</h2>
        <hr />
        <p>
          Please send us information about your query on the following channels:
        </p>
        <ul>
          <li>
            <DraftsIcon className='contact-icon' />{' '}
            <strong>loldondo@gmail.com</strong>
          </li>
          <li>
            <FacebookIcon className='contact-icon' /> <strong>YakNews</strong>
          </li>
          <li>
            <TwitterIcon className='contact-icon' /> <strong>@YakNews</strong>
          </li>
          <li>
            <InstagramIcon className='contact-icon' /> <strong>@YakNews</strong>
          </li>
          <li>
            <CallIcon className='contact-icon' />{' '}
            <strong>+1 (0) 843 234 321</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
