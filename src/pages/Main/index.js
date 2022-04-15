import { Bar } from '../../components/Bar/index.js';
import { BackColor } from '../../components/Backcolor/index.js';

export const Main = () => {
  return `
    ${Bar()}
    ${BackColor()}
  `;
};
