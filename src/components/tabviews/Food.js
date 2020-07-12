import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Carousel from './Carousel';
import { getCarouselFood } from '../../actions/carousel';
import Spinner from '../layout/Spinner';

const Food = ({ getCarouselFood, carousel: { food, loading } }) => {
  useEffect(() => {
    getCarouselFood();
  }, [getCarouselFood]);

  return (
    <div>
      {food ? (
        <Carousel data={food && loading !== true && food.results} />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

Food.propTypes = {
  getCarouselFood: PropTypes.func.isRequired,
  food: PropTypes.object
};

const mapState = (state) => ({
  carousel: state.carousel
});

export default connect(mapState, { getCarouselFood })(Food);
