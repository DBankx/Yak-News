import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Carousel from './Carousel';
import { getCarouselWorld } from '../../actions/carousel';

const World = ({ getCarouselWorld, carousel: { world } }) => {
  useEffect(() => {
    getCarouselWorld();
  }, [getCarouselWorld]);

  return (
    <div>
      <Carousel data={world && world.value} />
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
