import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Carousel from './Carousel';
import { getCarouselTech } from '../../actions/carousel';
import Spinner from '../layout/Spinner';
import { getNews } from '../../actions/news';
import NewsBody from './NewsBody';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

const Tech = ({
  getCarouselTech,
  carousel: { tech, loading },
  news: { result },
  getNews
}) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    getCarouselTech();
    getNews('Technology', page);
  }, [getCarouselTech, getNews, page]);

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
      {tech ? (
        <Carousel data={tech && loading !== true && tech.results} />
      ) : (
        <Spinner />
      )}

      <h1>Tech News</h1>
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

Tech.propTypes = {
  getCarouselTech: PropTypes.func.isRequired,
  tech: PropTypes.object,
  getNews: PropTypes.func.isRequired
};

const mapState = (state) => ({
  carousel: state.carousel,
  news: state.news
});

export default connect(mapState, { getCarouselTech, getNews })(Tech);
