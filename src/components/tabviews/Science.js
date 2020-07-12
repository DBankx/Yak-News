import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Carousel from './Carousel';
import { getCarouselScience } from '../../actions/carousel';
import Spinner from '../layout/Spinner';

const Science = ({ getCarouselScience, carousel: { science, loading } }) => {
  useEffect(() => {
    getCarouselScience();
  }, [getCarouselScience]);

  return (
    <div>
      {science ? (
        <Carousel data={science && loading !== true && science.results} />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

Science.propTypes = {
  getCarouselScience: PropTypes.func.isRequired,
  science: PropTypes.object
};

const mapState = (state) => ({
  carousel: state.carousel
});

export default connect(mapState, { getCarouselScience })(Science);
