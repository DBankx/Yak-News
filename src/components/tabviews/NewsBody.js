import React from 'react';
import PropTypes from 'prop-types';
import NewsCard from './NewsCard';

const NewsBody = ({ articles }) => {
  return (
    <div className='wrapper'>
      {articles &&
        articles.map((article, index) => {
          return <NewsCard data={article} key={index} />;
        })}
    </div>
  );
};

NewsBody.propTypes = {
  articles: PropTypes.array.isRequired
};

export default NewsBody;
