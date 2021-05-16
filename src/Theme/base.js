import LIGHT from './light';

const themes = {
  LIGHT,
};

export default function getTheme(theme) {
  return themes[theme];
}
