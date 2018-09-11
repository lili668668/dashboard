import React, { Component } from 'react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

class App extends Component {
  render () {
    const { population } = this.props
    return (
      <ResponsiveContainer height={300} width="100%">
        <BarChart data={population} margin={{ left: 50, right: 50, top: 30, bottom: 30 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="age" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar stackId="a" dataKey="male" fill="#BBDEFB" />
          <Bar stackId="a" dataKey="female" fill="#F8BBD0" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

export default App
