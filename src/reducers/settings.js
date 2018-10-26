import { SET_THEME, Themes } from '../actions';

const initialState = {
  theme: Themes.THEME_LIGHT
};

const settings = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return Object.assign({}, state, {
        theme: action.theme
      });
    default:
      return state;
  }
};

export default settings;
