import React from 'react'
import { useSelector} from 'react-redux'
import * as Mui from '@material-ui/core';
import {XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries} from 'react-vis';

export const ChartPage = () => {
  const users = useSelector(state => state.users)
 
  const myData = [{angle: 1}, {angle: 5}, {angle: 2}]

  return (
    <section className="posts-list">
    <XYPlot margin={{bottom: 70}} xType="ordinal" width={300} height={300}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis tickLabelAngle={-45} />
      <YAxis />
      <VerticalBarSeries
        data={[
          {x: 'Apples', y: 10},
          {x: 'Bananas', y: 5},
          {x: 'Cranberries', y: 15}
        ]}
      />
    
    </XYPlot>
    </section>
  )
}