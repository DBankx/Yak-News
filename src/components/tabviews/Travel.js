import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Carousel from './Carousel';
import { getCarouselTravel } from '../../actions/carousel';
import Spinner from '../layout/Spinner';

const Travel = ({ getCarouselTravel, carousel: { travel, loading } }) => {
  useEffect(() => {
    getCarouselTravel();
  }, [getCarouselTravel]);

  return (
    <div>
      {travel ? (
        <Carousel data={travel && loading !== true && travel.results} />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

Travel.propTypes = {
  getCarouselTravel: PropTypes.func.isRequired,
  travel: PropTypes.object
};

const mapState = (state) => ({
  carousel: state.carousel
});

export default connect(mapState, { getCarouselTravel })(Travel);
