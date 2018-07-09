import React, {Component} from 'react';
import {scaleLinear, scaleTime} from 'd3-scale';
import moment from 'moment';

import Axes from '../Axes';
import Scatterplot from '../Scatterplot'
import ResponsiveWrapper from '../ResponsiveWrapper';
import Services from '../../shared/Services';

class Chart extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
    this.xScale = scaleTime()
    this.yScale = scaleLinear()
  }

  componentDidMount() {
    Services.getScatterPlotData((res) => {
      const formatData = res.map((d) => {
        return {
          start_time: new Date(d.start_time),
          status: d.status,
          duration: d.duration / 60
        }
      });
      this.setState({data: formatData})
    });
  }

  render() {
    const margins = {top: 50, right: 20, bottom: 100, left: 60}
    const svgDimensions = {
      width: Math.max(this.props.parentWidth, 300),
      height: 500
    }

    const maxValue = Math.max(...this.state.data.map(d => d.duration))

    const moments = this.state.data.map(d => moment(d.start_time));

    const minDate = moment.min(moments);

    const maxDate = moment.max(moments);

    const xScale = this.xScale
      .domain([minDate._d, maxDate._d])
      .range([margins.left, svgDimensions.width - margins.right])

    const yScale = this.yScale
      .domain([0, maxValue])
      .range([svgDimensions.height - margins.bottom, margins.top])

    return (
      <svg width={svgDimensions.width} height={svgDimensions.height}>
        <Axes
          scales={{xScale, yScale}}
          margins={margins}
          svgDimensions={svgDimensions}
        />
        <Scatterplot
          scales={{xScale, yScale}}
          margins={margins}
          data={this.state.data}
          maxValue={maxValue}
          svgDimensions={svgDimensions}
        />
      </svg>
    )
  }
}

export default ResponsiveWrapper(Chart)
