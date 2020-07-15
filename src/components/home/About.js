import React from 'react';
import reactImage from '../../imgs/react.png';
import redux from '../../imgs/redux.png';
import three from '../../imgs/three.png';
import axios from '../../imgs/axios.png';

const About = () => {
  return (
    <div className='container'>
      <div className='about-block'>
        <h1>About YakNews</h1>
        <hr />
        <p>
          YakNews started as an idea from a web programmer on getting daily news
          easy and accesible to the masses, a click and see process, and in
          doing so the idea of yakNews was born. The entire app took about two
          full weeks to finalize and deploy because it was a minimalistic and
          quick app it became very popular on release and the team never looked
          back.
        </p>
        <h3 style={{ marginTop: '1em' }}>The Tech Stack</h3>
        <hr />
        <p>
          The teck stack yakNews uses is focused hevaily on react and redux. The
          use of react was to make a useful, beautiful and interactive UI for
          the users to be engaged in and redux was used to fetch and store the
          api in the local state of the app. The app relies on a subpar to great
          internet connection, because all data is gotten from an api and
          displayed on the screen beautifly
        </p>
        <h4 style={{ marginTop: '1em' }}>
          List of technologies used in YakNews:
        </h4>

        <img src={reactImage} alt='react-image' />

        <img src={redux} alt='redux-image' />

        <img src={three} alt='main-three' />
        <img src={axios} alt='axios' />

        <h5 style={{ marginTop: '1em' }}>To our users:</h5>
        <p>
          We thank you so much for using yakNews, and with your help and support
          the platform for reading news easilt continues to grow into a big
          community with both readers and journalists
        </p>
        <small style={{ marginBottom: '2em' }}>
          Made with ❤ Damilola Hundeyin
        </small>
      </div>
    </div>
  );
};

export default About;
