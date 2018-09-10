import React, { Component } from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts'
import { axises } from '../utils/constants'

class App extends Component {
  render () {
    const { leftAxis, rightAxis, charts } = this.props
    return (
      <ResponsiveContainer height={300} width="100%">
        <LineChart data={charts} margin={{ left: 50, right: 50, top: 30, bottom: 30 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="hour" />
          <YAxis yAxisId={leftAxis} orientation="left" label={{ value: axises.find(axis => axis.value === leftAxis).label, position: 'left', offset: -10 }} />
          <YAxis yAxisId={rightAxis} orientation="right" label={{ value: axises.find(axis => axis.value === rightAxis).label, position: 'right', offset: -10 }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" yAxisId={leftAxis} dataKey={leftAxis} stroke="#FFA726" fill="#FFB74D" />
          <Line type="monotone" yAxisId={rightAxis} dataKey={rightAxis} stroke="#2196F3" fill="#42A5F5" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default App
