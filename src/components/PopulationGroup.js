import React, { Component } from 'react'
import { ResponsiveContainer, Tooltip, PieChart, Pie, Cell } from 'recharts'

const groupPopulationByAge = (population) => {
  const ageGroups = population
    .map(p => ({ name: p.age, value: p.male + p.female, color: '#00C49F' }))
  return ageGroups
}

const groupPopulationBySex = (population) => {
  const maleSum = population
    .reduce((sum, p) => {
      return sum + p.male
    }, 0)
  const femaleSum = population
    .reduce((sum, p) => {
      return sum + p.female
    }, 0)
  return [
    { name: 'male', value: maleSum, color: '#BBDEFB' },
    { name: 'female', value: femaleSum, color: '#F8BBD0' }
  ]
}

class App extends Component {
  render () {
    const { population } = this.props
    const ageGroups = groupPopulationByAge(population)
    const sexGroups = groupPopulationBySex(population)
    return (
      <ResponsiveContainer height={300} width="100%">
        <PieChart margin={{ left: 50, right: 50, top: 30, bottom: 30 }}>
          <Tooltip />
          <Pie data={sexGroups} outerRadius={80}>
            {
              sexGroups.map((entry, index) => (<Cell fill={entry.color} />))
            }
          </Pie>
          <Pie data={ageGroups} innerRadius={90} outerRadius={110} label={(object) => (object.name)}>
            {
              ageGroups.map((entry, index) => (<Cell fill={entry.color} />))
            }
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}

export default App
