import React, { Component } from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts'
import { axises } from '../utils/constants'

class App extends Component {
  render () {
    const { axis, charts } = this.props
    return (
      <ResponsiveContainer height={300} width="100%">
        <LineChart data={charts} margin={{ left: 50, right: 50, top: 30, bottom: 30 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="hour" label={{ value: 'hours', position: 'insideBottom' }} />
          <YAxis yAxisId={`now_${axis}`} orientation="left" label={{ value: axises.find(a => a.value === axis).label, position: 'left', offset: -10 }} />
          <YAxis yAxisId={`future_${axis}`} orientation="right" label={{ value: axises.find(a => a.value === axis).label, position: 'right', offset: -10 }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" yAxisId={`now_${axis}`} dataKey={`now_${axis}`} stroke="#E65100" fill="#E65100" />
          <Line type="monotone" yAxisId={`future_${axis}`} dataKey={`future_${axis}`} stroke="#FFB74D" fill="#FFB74D" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default App
