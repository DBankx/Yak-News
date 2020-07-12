import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Carousel from './Carousel';
import { getCarouselPolitics } from '../../actions/carousel';
import Spinner from '../layout/Spinner';

const Politics = ({ getCarouselPolitics, carousel: { politics, loading } }) => {
  useEffect(() => {
    getCarouselPolitics();
  }, [getCarouselPolitics]);

  return (
    <div>
      {politics ? (
        <Carousel data={politics && loading !== true && politics.results} />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

Politics.propTypes = {
  getCarouselPolitics: PropTypes.func.isRequired,
  politics: PropTypes.object
};

const mapState = (state) => ({
  carousel: state.carousel
});

export default connect(mapState, { getCarouselPolitics })(Politics);
