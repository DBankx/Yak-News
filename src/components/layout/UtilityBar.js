import React, { useEffect, useState } from 'react';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux';
import { getWeather } from '../../actions/weather';
import Spinner from './Spinner';
import { getSuggestions } from '../../actions/news';
import { Link } from 'react-router-dom';

const UtilityBar = ({
  weather,
  getWeather,
  getSuggestions,
  news: { suggestions }
}) => {
  const [text, setText] = useState('');

  // get the users location and weather as soon as component mounts
  useEffect(() => {
    getWeather();
    getSuggestions(text);
  }, [getWeather, getSuggestions, text]);

  // get the current date
  const date = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  const today = date.toLocaleDateString('en-US', options);

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <section className='util-bar'>
      <div className='container'>
        <ul>
          <li>{today}</li>
          <li className='weather-display hide-sm'>
            {weather &&
            weather.weatherData !== null &&
            weather.error === null &&
            weather.loading === false ? (
              <ul className='weather'>
                <li>
                  <img
                    src={`http://openweathermap.org/img/wn/${weather.weatherData.weather[0].icon}@2x.png`}
                    alt='data logo'
                  />
                </li>
                <li>
                  <p>
                    <strong>{weather.weatherData.main.temp}°C</strong>
                  </p>
                  <p>{weather.weatherData.sys.country}</p>
                </li>
              </ul>
            ) : weather.error === null ? (
              <Spinner />
            ) : (
              <p>{weather.error}</p>
            )}
          </li>
          <li>
            <div className='search-box'>
              <form>
                <input
                  style={{ position: 'relative' }}
                  type='text'
                  placeholder='search'
                  value={text}
                  onChange={handleChange}
                />
                <Zoom in={true}>
                  <Link to={`/search/${text}`}>
                    <Fab>
                      <SearchIcon />
                    </Fab>
                  </Link>
                </Zoom>
              </form>
              {/* gets the topic from the text and displays it in this box */}
              {suggestions &&
              suggestions.articles.length > 0 &&
              text.length > 0 ? (
                <div className='result-box' style={{ position: 'absolute' }}>
                  <h1>Top Results</h1>
                  <hr></hr>
                  {suggestions.articles.map((article, index) => {
                    return (
                      <div key={index} className='suggestion-box'>
                        <a
                          href={article.url}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          {article.title}
                        </a>
                      </div>
                    );
                  })}
                  <Link to={`/search/${text}`}>
                    Click here to see all results
                  </Link>
                </div>
              ) : null}
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

const mapState = (state) => ({
  weather: state.weather,
  news: state.news
});

export default connect(mapState, { getWeather, getSuggestions })(UtilityBar);
