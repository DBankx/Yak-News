import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Carousel from './Carousel';
import { getCarouselBusniess } from '../../actions/carousel';
import Spinner from '../layout/Spinner';

const Busniess = ({ getCarouselBusniess, carousel: { busniess, loading } }) => {
  useEffect(() => {
    getCarouselBusniess();
  }, [getCarouselBusniess]);

  return (
    <div>
      {busniess ? (
        <Carousel data={busniess && loading !== true && busniess.results} />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

Busniess.propTypes = {
  getCarouselBusniess: PropTypes.func.isRequired,
  busniess: PropTypes.object
};

const mapState = (state) => ({
  carousel: state.carousel
});

export default connect(mapState, { getCarouselBusniess })(Busniess);
