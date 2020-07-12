import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Carousel from './Carousel';
import { getCarouselFashion } from '../../actions/carousel';
import Spinner from '../layout/Spinner';

const Fashion = ({ getCarouselFashion, carousel: { fashion, loading } }) => {
  useEffect(() => {
    getCarouselFashion();
  }, [getCarouselFashion]);

  return (
    <div>
      {fashion ? (
        <Carousel data={fashion && loading !== true && fashion.results} />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

Fashion.propTypes = {
  getCarouselFashion: PropTypes.func.isRequired,
  fashion: PropTypes.object
};

const mapState = (state) => ({
  carousel: state.carousel
});

export default connect(mapState, { getCarouselFashion })(Fashion);
