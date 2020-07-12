import React from 'react';
import { isTablet } from 'react-device-detect';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import Moment from 'react-moment';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import { v4 as uuidv4 } from 'uuid';

const Carousel = ({ data }) => {
  // splice the data to get the carousel data
  const carouselData = data && data.splice(0, 10);

  return (
    <CarouselProvider
      naturalSlideWidth={80}
      naturalSlideHeight={isTablet ? 40 : 25}
      interval={4000}
      isPlaying={true}
      infinite={true}
      //   gets the length of the carousel data array
      totalSlides={data && carouselData.length}
      className='hide-sm'
    >
      <div className='carousel-body'>
        <ButtonBack className='trig-button'>
          <KeyboardArrowLeftIcon />
        </ButtonBack>
        {/* map through the data and render it in the ui */}
        <Slider className='carousel-slider'>
          {data &&
            carouselData.map((news, index) => {
              return (
                <Slide key={uuidv4()} index={index}>
                  <a href={news.url} target='_blank' rel='noopener noreferrer'>
                    <div className='carousel-news'>
                      {/* @@@todo - display image of headline */}
                      <img src={news.multimedia[0].url} alt='headline' />
                      <div className='news-body'>
                        <h1>{news.title}</h1>
                        <p className='abstract'>{news.abstract}</p>
                        <p className='byline'>{news.byline}</p>
                        <ul>
                          <li>
                            <QueryBuilderIcon />
                          </li>
                          <li>
                            <strong>
                              <Moment fromNow>{news.published_date}</Moment>
                            </strong>
                          </li>
                          <li>•</li>
                          <li>
                            {news.subsection ? news.subsection : news.section}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </Slide>
              );
            })}
        </Slider>

        <ButtonNext className='trig-button'>
          <KeyboardArrowRightIcon />
        </ButtonNext>
      </div>
    </CarouselProvider>
  );
};

export default Carousel;
