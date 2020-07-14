import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Carousel from './Carousel';
import { getCarouselPolitics } from '../../actions/carousel';
import Spinner from '../layout/Spinner';
import { getNews } from '../../actions/news';
import NewsBody from './NewsBody';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

const Politics = ({
  getCarouselPolitics,
  carousel: { politics, loading },
  getNews,
  news: { result }
}) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    getCarouselPolitics();
    getNews('Politics', page);
  }, [getCarouselPolitics, getNews, page]);

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
      {politics ? (
        <Carousel data={politics && loading !== true && politics.results} />
      ) : (
        <Spinner />
      )}

      <h1>Politics News</h1>
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

Politics.propTypes = {
  getCarouselPolitics: PropTypes.func.isRequired,
  politics: PropTypes.object,
  getNews: PropTypes.func.isRequired
};

const mapState = (state) => ({
  carousel: state.carousel,
  news: state.news
});

export default connect(mapState, { getCarouselPolitics, getNews })(Politics);
