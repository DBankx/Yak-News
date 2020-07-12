import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Carousel from './Carousel';
import { getCarouselTech } from '../../actions/carousel';
import Spinner from '../layout/Spinner';

const Tech = ({ getCarouselTech, carousel: { tech, loading } }) => {
  useEffect(() => {
    getCarouselTech();
  }, [getCarouselTech]);

  return (
    <div>
      {tech ? (
        <Carousel data={tech && loading !== true && tech.results} />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

Tech.propTypes = {
  getCarouselTech: PropTypes.func.isRequired,
  tech: PropTypes.object
};

const mapState = (state) => ({
  carousel: state.carousel
});

export default connect(mapState, { getCarouselTech })(Tech);
