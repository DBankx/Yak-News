import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Carousel from './Carousel';
import { getCarouselSports } from '../../actions/carousel';
import Spinner from '../layout/Spinner';
import { getNews } from '../../actions/news';
import NewsBody from './NewsBody';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

const Sports = ({
  getCarouselSports,
  carousel: { sports, loading },
  getNews,
  news: { result }
}) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    getCarouselSports();
    getNews('Sports', page);
  }, [getCarouselSports, getNews, page]);

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
      {sports ? (
        <Carousel data={sports && loading !== true && sports.results} />
      ) : (
        <Spinner />
      )}

      <h1>Sports News</h1>
      <hr></hr>

      {result !== null ? (
        <NewsBody articles={result && result.articles} />
      ) : (
        <Spinner />
      )}

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
  );
};

Sports.propTypes = {
  getCarouselSports: PropTypes.func.isRequired,
  sports: PropTypes.object,
  getNews: PropTypes.func.isRequired
};

const mapState = (state) => ({
  carousel: state.carousel,
  news: state.news
});

export default connect(mapState, { getCarouselSports, getNews })(Sports);
