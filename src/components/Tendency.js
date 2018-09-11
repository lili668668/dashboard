import React, { Component } from 'react'
import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts'

class App extends Component {
  render () {
    const { tendency } = this.props
    return (
      <ResponsiveContainer height={300} width="100%">
        <RadarChart outerRadius={100} data={tendency}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis/>
          <Tooltip />
          <Radar name="Tendency" dataKey="value" stroke="#0091EA" fill="#0091EA" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}

export default App
