import React from 'react';
import { isTablet } from 'react-device-detect';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
  DotGroup
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import Moment from 'react-moment';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import Spinner from '../layout/Spinner';

const Carousel = ({ data }) => {
  const mainData = data && data;

  return (
    <CarouselProvider
      naturalSlideWidth={80}
      naturalSlideHeight={isTablet ? 40 : 25}
      interval={4000}
      //   gets the length of the data array
      totalSlides={data && mainData.length}
      className='hide-sm'
    >
      <div className='carousel-body'>
        <ButtonBack className='trig-button'>
          <KeyboardArrowLeftIcon />
        </ButtonBack>
        {/* map through the data and render it in the ui */}
        <Slider className='carousel-slider'>
          {data ? (
            mainData.map((news, index) => {
              return (
                <Slide key={news.id} index={index}>
                  <a href={news.url} target='_blank' rel='noopener noreferrer'>
                    <div className='carousel-news'>
                      <Image
                        src={news.media[0]['media-metadata'][2].url}
                        alt='headline'
                        hasMasterSpinner={true}
                      />
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
                              <Moment fromNow>{news.updated}</Moment>
                            </strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </Slide>
              );
            })
          ) : (
            <Spinner className='carousel-spinner' />
          )}
        </Slider>

        <ButtonNext className='trig-button'>
          <KeyboardArrowRightIcon />
        </ButtonNext>
      </div>
      <DotGroup className='dot-group' />
    </CarouselProvider>
  );
};

export default Carousel;
