import React from 'react';

import './App.scss';
import Chart from '../Chart';

export default () =>
  <div className="App">
    <div className="App-header">
      <h2>Interactive Scatterplot Component</h2>
    </div>

    <div className="App-chart-container">
      <Chart/>
    </div>
  </div>
