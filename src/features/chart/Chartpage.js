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
  const posts = useSelector(state => state.posts)
  const users = useSelector(state => state.users)
  const arrForChart =[]
  users.forEach(element => {
    let y = posts.filter(post => post.userId == element.id).length
    arrForChart.push({x: element.name, y})    
  });
  
  const divContainerStyle = {
    display: 'flex',
    justifyContent: 'center' ,
    marginTop: '10%'
  };

  return (
    <section style={divContainerStyle}>
    <XYPlot margin={{bottom: 70}} xType="ordinal" width={300} height={300}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis tickLabelAngle={-45} />
      <YAxis />
      <VerticalBarSeries
        data={arrForChart}
      />
    
    </XYPlot>
    </section>
  )
}