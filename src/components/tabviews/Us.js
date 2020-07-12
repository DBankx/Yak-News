import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Carousel from './Carousel';
import { getCarouselUs } from '../../actions/carousel';
import Spinner from '../layout/Spinner';

const Us = ({ getCarouselUs, carousel: { us, loading } }) => {
  useEffect(() => {
    getCarouselUs();
  }, [getCarouselUs]);

  return (
    <div>
      {us ? (
        <Carousel data={us && loading !== true && us.results} />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

Us.propTypes = {
  getCarouselUs: PropTypes.func.isRequired,
  Uu: PropTypes.object
};

const mapState = (state) => ({
  carousel: state.carousel
});

export default connect(mapState, { getCarouselUs })(Us);
