import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import TodayIcon from '@material-ui/icons/Today';

const NewsCard = ({ data }) => {
  return (
    <a
      className='news-link'
      href={data.url}
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className='news-card'>
        <div className='card-image'>
          {data.urlToImage ? (
            <img src={data.urlToImage} alt='headline thumbnail' />
          ) : null}
        </div>
        <div className='card-body'>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
          <a href={data.url} target='_blank' rel='noopener noreferrer'>
            READ ARTICLE
          </a>
          <ul>
            <li>
              <TodayIcon className={{ marginTop: '1em' }} />
            </li>
            <li>
              <Moment fromNow>{data.publishedAt}</Moment>
            </li>
            <li>•</li>
            <li>
              <strong>{data.source.name}</strong>
            </li>
          </ul>
        </div>
      </div>
    </a>
  );
};

NewsCard.propTypes = {};

export default NewsCard;
