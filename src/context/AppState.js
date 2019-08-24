import React, { useReducer } from 'react';
import axios from 'axios';
import AppContext from './appContext';
import AppReducer from './appReducer';
import { GET_PLACES, SET_VISIBILITY, SET_POPUP } from './types';

const AppState = props => {
  const initialState = {
    places: {},
    isVisible: false,
    popup: {}
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Get places
  const getPlaces = async () => {
    const res = await axios(
      'https://api.mapbox.com/geocoding/v5/mapbox.places/restaurant.json?proximity=28.4685,%2049.2344&bbox=27.37442,48.06551,30.023758,49.889038&limit=10&access_token=pk.eyJ1IjoiY29kZWFnb255IiwiYSI6ImNqemg5NHE4dDBiMGczbG16cDhyb3Q1NTYifQ.h_WYdEWMtkuogpC9_l89SQ'
    );

    dispatch({
      type: GET_PLACES,
      payload: res.data
    });
  };

  // Set sidebar visibility
  const setVisibility = () => {
    state.isVisible
      ? dispatch({
          type: SET_VISIBILITY,
          payload: false
        })
      : dispatch({
          type: SET_VISIBILITY,
          payload: true
        });
  };

  // Set popup

  return (
    <AppContext.Provider
      value={{
        places: state.places,
        isVisible: state.isVisible,
        getPlaces,
        setVisibility
        // users: state.users,
        // user: state.user,
        // repos: state.repos,
        // loading: state.loading,
        // searchUsers,
        // clearUsers,
        // getUser,
        // getUserRepos
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;