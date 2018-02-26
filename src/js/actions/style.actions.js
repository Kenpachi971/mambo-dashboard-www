import {CALL_API} from '../client/api';

/*------------------------------------------------------------------------------------------
 * Home ABOUTME
 *-----------------------------------------------------------------------------------------*/
export const LOAD_ABOUTME_REQUEST = 'LOAD_ABOUTME_REQUEST';
export const LOAD_ABOUTME_SUCCESS = 'LOAD_ABOUTME_SUCCESS';
export const LOAD_ABOUTME_FAILURE = 'LOAD_ABOUTME_FAILURE';
const loadAboutMeAsync = () => ({
  [CALL_API]: {
    types: [ LOAD_ABOUTME_REQUEST, LOAD_ABOUTME_SUCCESS, LOAD_ABOUTME_FAILURE ],
    endpoint: `aboutme.md`,
    method: 'GET'
  }
});

export const loadHome = () => (dispatch) => {
  return dispatch(loadAboutMeAsync());
};

export const CHANGE_MAP_STYLE = 'CHANGE_MAP_STYLE';

export const changeMapStyle = (style) => ({
  type: CHANGE_MAP_STYLE,
  style: style
});