import React, { useEffect } from 'react';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux';
import { getWeather } from '../../actions/weather';
import Spinner from './Spinner';

const UtilityBar = ({ weather, getWeather }) => {
  // get the users location and weather as soon as component mounts
  useEffect(() => {
    getWeather();
  }, [getWeather]);

  // get the current date
  const date = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  const today = date.toLocaleDateString('en-US', options);

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
            <form>
              <input type='text' placeholder='search' />
              <Zoom in={true}>
                <Fab>
                  <SearchIcon />
                </Fab>
              </Zoom>
            </form>
          </li>
        </ul>
      </div>
    </section>
  );
};

const mapState = (state) => ({
  weather: state.weather
});

export default connect(mapState, { getWeather })(UtilityBar);
