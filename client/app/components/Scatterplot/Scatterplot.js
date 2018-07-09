import React, {Component} from 'react';

export default class Scatterplot extends Component {
  constructor(props) {
    super(props)
  }

  colorScale(status) {
    if (status === 'pass') {
      return 'green';
    }
    if (status === 'error') {
      return 'orange';
    }
    if (status === 'fail') {
      return 'red';
    }
  }

  handleStarClick(e) {
    if (e.target.getAttribute('stroke') === null) {
      e.target.setAttribute('stroke', '#1E90FF');
      e.target.setAttribute('stroke-width', 2);
    } else {
      e.target.removeAttribute('stroke');
      e.target.removeAttribute('stroke-widthL̥');
    }
  }

  render() {
    const {scales, data} = this.props
    const {xScale, yScale} = scales

    const circles = (
      data.map(datum =>
        <circle
          cx={xScale(datum.start_time)}
          cy={yScale(datum.duration)}
          key={datum.start_time}
          r={7}
          fill={this.colorScale(datum.status)}
          onClick={this.handleStarClick.bind(this)}
        />,
      )
    )

    return (
      <g>{circles}</g>
    )
  }
}
