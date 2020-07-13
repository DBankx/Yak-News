import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Carousel from './Carousel';
import { getCarouselWorld } from '../../actions/carousel';
import { getNews } from '../../actions/news';
import Spinner from '../layout/Spinner';
import NewsBody from './NewsBody';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

const World = ({
  getCarouselWorld,
  getNews,
  carousel: { world, loading },
  news: { result }
}) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    getCarouselWorld();
    // get news articles on world news
    getNews('world news', page);
  }, [getCarouselWorld, getNews, page]);

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
      {world ? (
        <Carousel data={world && loading !== true && world.results} />
      ) : (
        <Spinner />
      )}

      <h1>World News</h1>
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

World.propTypes = {
  getCarouselWorld: PropTypes.func.isRequired,
  world: PropTypes.object,
  news: PropTypes.object.isRequired
};

const mapState = (state) => ({
  carousel: state.carousel,
  news: state.news
});

export default connect(mapState, { getCarouselWorld, getNews })(World);
