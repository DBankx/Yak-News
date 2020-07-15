import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getSearchedNews } from '../../actions/news';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Spinner from '../layout/Spinner';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import SearchIcon from '@material-ui/icons/Search';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const Search = ({ match, getSearchedNews, news: { search, loading } }) => {
  const [searchData, setSearchData] = useState({
    // set the topic as what was searched previously
    topic: match.params.topic,
    sortby: ''
  });

  const [page, setPage] = useState(1);

  //   get the news of the topic in the url
  useEffect(() => {
    getSearchedNews(match.params.topic, page, match.params.sortby);
  }, [getSearchedNews, match, page]);

  function handleChange(e) {
    const { name, value } = e.target;
    setSearchData((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  // increases the page number
  function nextPage() {
    setPage(page + 1);
  }

  // decreases the page number
  function prevPage() {
    setPage(page - 1);
  }

  return (
    <div className='container'>
      <div className='homepage'>
        <Link to='/'> Back to homepage</Link>
      </div>
      <form className='search-form'>
        <div className='form-element'>
          <TextField
            name='topic'
            label='Topic'
            value={searchData.topic}
            onChange={handleChange}
            type='text'
            variant='outlined'
          />
        </div>
        <div className='form-element'>
          <FormControl variant='outlined'>
            <InputLabel id='demo-simple-select-filled-label'>Sortby</InputLabel>
            <Select
              labelId='demo-simple-select-filled-label'
              name='sortby'
              value={searchData.sortby}
              onChange={handleChange}
              style={{ width: '220px' }}
              label='sortby'
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value='relevancy'>relevancy</MenuItem>
              <MenuItem value='popularity'>popularity</MenuItem>
              <MenuItem value='publishedAt'>publishedAt</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className='form-element'>
          <Zoom in={true}>
            {/* link to the search page again with the new given values */}
            <Link
              to={`/search/${searchData.topic}/${
                searchData.sortby ? searchData.sortby : 'none'
              }`}
            >
              <Fab>
                <SearchIcon />
              </Fab>
            </Link>
          </Zoom>
        </div>
      </form>
      {/* get the results from the state and render it on the screen */}
      {search === null && loading ? (
        <Spinner />
      ) : search && search.articles.length > 0 ? (
        <div className='container'>
          <div className='result-section'>
            <h1>Results</h1>
            <hr></hr>
            <p>
              Total Results: <strong>{search && search.totalResults}</strong>
            </p>
            {search &&
              search.articles.map((result, index) => {
                return (
                  <div className='search-result' key={index}>
                    <Accordion style={{ background: '#dddddd' }}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel1a-content'
                        id='panel1a-header'
                      >
                        <h3>{result.title}</h3>
                      </AccordionSummary>
                      <AccordionDetails
                        className='result-entry'
                        style={{ backgroundColor: '#fff' }}
                      >
                        <p>
                          {result.description}{' '}
                          <a
                            style={{ display: 'block' }}
                            href={result.url}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            READ ARTICLE
                          </a>
                          <ul>
                            <li>
                              <Moment format='DD/MM/YYYY'>
                                {result.publishedAt}
                              </Moment>
                            </li>
                            <li>•</li>
                            <li>
                              <strong>{result.source.name}</strong>
                            </li>
                          </ul>
                        </p>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                );
              })}
          </div>

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
        <div className='container'>
          <h1>Results</h1>
          <hr></hr>
          <p style={{ margin: '1em 0' }}>
            Total Results: <strong>0</strong>
          </p>
          <p style={{ margin: '1em 0' }}>No results found</p>
        </div>
      )}
    </div>
  );
};

Search.propTypes = {
  getSearchedNews: PropTypes.func.isRequired,
  search: PropTypes.object
};

const mapState = (state) => ({
  news: state.news
});

export default connect(mapState, { getSearchedNews })(Search);
