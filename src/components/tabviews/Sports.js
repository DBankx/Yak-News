import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Carousel from './Carousel';
import { getCarouselSports } from '../../actions/carousel';
import Spinner from '../layout/Spinner';

const Sports = ({ getCarouselSports, carousel: { sports, loading } }) => {
  useEffect(() => {
    getCarouselSports();
  }, [getCarouselSports]);

  return (
    <div>
      {sports ? (
        <Carousel data={sports && loading !== true && sports.results} />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

Sports.propTypes = {
  getCarouselSports: PropTypes.func.isRequired,
  sports: PropTypes.object
};

const mapState = (state) => ({
  carousel: state.carousel
});

export default connect(mapState, { getCarouselSports })(Sports);
