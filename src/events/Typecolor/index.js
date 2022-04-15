import { option } from '../../events/Changeclick/index.js';
export function Color(trueOrFalse) {
  if (trueOrFalse) {
    let simple = {
      Blue: 'Blue',
      Red: 'Red',
      Green: 'Green',
      Orange: 'Orange',
      Yellow: 'Yellow',
      Purple: 'Purple',
    };
    return simple;
  } else {
    let hex = {
      Blue: '#5566ff',
      Red: '#ff3b3b',
      Green: '#63ff56',
      Orange: '#ff9834',
      Yellow: '#ffea59',
      Purple: '#b052ff',
    };
    return hex;
  }
}

export const colorChange = () => {
  let colors = Color(option);
  let keys = Object.keys(colors);
  return colors[keys[(keys.length * Math.random()) << 0]];
};
