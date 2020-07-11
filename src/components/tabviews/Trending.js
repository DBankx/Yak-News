import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Carousel from './Carousel';
import { getCarouselTrending } from '../../actions/carousel';

const Trending = ({ getCarouselTrending, carousel: { trending, loading } }) => {
  useEffect(() => {
    getCarouselTrending();
  }, [getCarouselTrending]);
  return (
    <div>
      <Carousel data={trending && loading !== true && trending.results} />
    </div>
  );
};

Trending.propTypes = {
  getCarouselTrending: PropTypes.func.isRequired
};

const mapState = (state) => ({
  carousel: state.carousel
});

export default connect(mapState, { getCarouselTrending })(Trending);
