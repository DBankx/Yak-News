import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Carousel from './Carousel';
import { getCarouselWorld } from '../../actions/carousel';
import Spinner from '../layout/Spinner';

const World = ({ getCarouselWorld, carousel: { world, loading } }) => {
  useEffect(() => {
    getCarouselWorld();
  }, [getCarouselWorld]);

  return (
    <div>
      {world ? (
        <Carousel data={world && loading !== true && world.results} />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

World.propTypes = {
  getCarouselWorld: PropTypes.func.isRequired,
  world: PropTypes.object
};

const mapState = (state) => ({
  carousel: state.carousel
});

export default connect(mapState, { getCarouselWorld })(World);
