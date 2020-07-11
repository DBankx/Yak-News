import axios from 'axios';
import { GET_CAROUSEL_NEWS, CAROUSEL_ERROR } from './actions';

export const getCarouselData = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
        'x-rapidapi-key': '10d9159985mshd96dbd53b59f696p1c4b5ejsnc5325ed3243a',
        useQueryString: true
      },
      params: {
        autoCorrect: 'false',
        pageNumber: '1',
        pageSize: '10',
        q: 'today',
        safeSearch: 'false'
      }
    };

    const res = await axios.get(
      'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/NewsSearchAPI',
      config
    );

    dispatch({
      type: GET_CAROUSEL_NEWS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CAROUSEL_ERROR,
      payload: err.response.data
    });
  }
};
