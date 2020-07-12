import React from 'react';
import spinner from '../../imgs/spinner.gif';

const Spinner = () => {
  return (
    <div>
      <img
        src={spinner}
        alt='spinner'
        width='50'
        height='50'
        style={{ margin: 'auto', display: 'block' }}
      />
    </div>
  );
};

export default Spinner;
