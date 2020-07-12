import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Carousel from './Carousel';
import { getCarouselArt } from '../../actions/carousel';
import Spinner from '../layout/Spinner';

const Art = ({ getCarouselArt, carousel: { art, loading } }) => {
  useEffect(() => {
    getCarouselArt();
  }, [getCarouselArt]);

  return (
    <div>
      {art ? (
        <Carousel data={art && loading !== true && art.results} />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

Art.propTypes = {
  getCarouselArt: PropTypes.func.isRequired,
  art: PropTypes.object
};

const mapState = (state) => ({
  carousel: state.carousel
});

export default connect(mapState, { getCarouselArt })(Art);
