import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Carousel from './Carousel';
import { getCarouselHealth } from '../../actions/carousel';
import Spinner from '../layout/Spinner';

const Health = ({ getCarouselHealth, carousel: { health, loading } }) => {
  useEffect(() => {
    getCarouselHealth();
  }, [getCarouselHealth]);

  return (
    <div>
      {health ? (
        <Carousel data={health && loading !== true && health.results} />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

Health.propTypes = {
  getCarouselHealth: PropTypes.func.isRequired,
  health: PropTypes.object
};

const mapState = (state) => ({
  carousel: state.carousel
});

export default connect(mapState, { getCarouselHealth })(Health);
