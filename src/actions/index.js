export const SET_THEME = 'SET_THEME';

export const Themes = {
  THEME_DARK: 'dark',
  THEME_LIGHT: 'light'
};

export const setTheme = (theme) => ({
  type: SET_THEME, theme
});
