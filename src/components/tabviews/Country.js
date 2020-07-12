import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Carousel from './Carousel';
import { getCarouselCountry } from '../../actions/carousel';
import Spinner from '../layout/Spinner';

const Country = ({
  getCarouselCountry,
  carousel: { country, loading },
  weather: { weatherData }
}) => {
  // get the country code from the data and use it to get the country news
  useEffect(() => {
    getCarouselCountry(weatherData ? weatherData.sys.country : 'us');
  }, [getCarouselCountry, weatherData]);

  return (
    <div>
      {country ? (
        <Carousel data={country && loading !== true && country.articles} />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

Country.propTypes = {
  getCarouselUs: PropTypes.func.isRequired,
  country: PropTypes.object
};

const mapState = (state) => ({
  carousel: state.carousel,
  weather: state.weather
});

export default connect(mapState, { getCarouselCountry })(Country);
