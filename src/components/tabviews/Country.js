import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Carousel from './Carousel';
import { getCarouselCountry } from '../../actions/carousel';
import { getNews } from '../../actions/news';
import Spinner from '../layout/Spinner';
import { isoCountry } from 'iso-country';
import NewsBody from './NewsBody';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

const Country = ({
  getCarouselCountry,
  getNews,
  carousel: { country, loading },
  weather: { weatherData },
  news: { result }
}) => {
  const [page, setPage] = useState(1);

  // get the country code from the data and use it to get the country news
  useEffect(() => {
    getCarouselCountry(weatherData ? weatherData.sys.country : 'us');
    // get the news from the news api from the countrys name
    getNews(
      isoCountry(weatherData ? weatherData.sys.country : 'US').name,
      page
    );
  }, [getCarouselCountry, weatherData, getNews, page]);

  // increases the page number
  function nextPage() {
    setPage(page + 1);
  }

  // decreases the page number
  function prevPage() {
    setPage(page - 1);
  }

  return (
    <div>
      {country ? (
        <Carousel data={country && loading !== true && country.articles} />
      ) : (
        <Spinner />
      )}

      <h1>{weatherData ? weatherData.sys.country : 'US'} News</h1>
      <hr></hr>

      {result !== null ? (
        <div className='all-body'>
          <NewsBody articles={result && result.articles} />
          <div className='trigger-buttons'>
            <ul>
              <li>
                <Zoom in={true}>
                  <Fab
                    className='btn'
                    onClick={prevPage}
                    disabled={page <= 1 ? true : null}
                  >
                    <ArrowBackIcon />
                  </Fab>
                </Zoom>
              </li>
              <li>Page {page}</li>
              <li>
                {' '}
                <Zoom in={true}>
                  <Fab className='btn' onClick={nextPage}>
                    <ArrowForwardIcon />
                  </Fab>
                </Zoom>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

Country.propTypes = {
  getCarouselUs: PropTypes.func.isRequired,
  country: PropTypes.object,
  getNews: PropTypes.func.isRequired
};

const mapState = (state) => ({
  carousel: state.carousel,
  weather: state.weather,
  news: state.news
});

export default connect(mapState, { getCarouselCountry, getNews })(Country);
