import { Main } from './src/pages/Main/index.js';
import { click } from './src/events/Click/index.js';
import { Simple, Hex } from './src/events/Changeclick/index.js';

function Render() {
  const root = document.getElementById('root');
  root.innerHTML = Main();
}

// load function
Render();
click();
Simple();
Hex();
