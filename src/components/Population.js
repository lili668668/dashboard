import React, { Component } from 'react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

class App extends Component {
  render () {
    const { nowPopulation, futurePopulation } = this.props
    const mergePopulation = nowPopulation
      .map(entry => {
        const fEntry = futurePopulation.find(f => f.age === entry.age)
        return { age: entry.age, 'Now Male': entry.male, 'Now Female': entry.female, 'Future Male': fEntry.male, 'Future Female': fEntry.female }
      })
    return (
      <ResponsiveContainer height={300} width="100%">
        <BarChart data={mergePopulation} margin={{ left: 50, right: 50, top: 30, bottom: 30 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="age" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar stackId="now" dataKey="Now Male" fill="#2196F3" />
          <Bar stackId="now" dataKey="Now Female" fill="#E91E63" />
          <Bar stackId="future" dataKey="Future Male" fill="#BBDEFB" />
          <Bar stackId="future" dataKey="Future Female" fill="#F8BBD0" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

export default App
