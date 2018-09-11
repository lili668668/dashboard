import React, { Component } from 'react'
import { ResponsiveContainer, Tooltip, PieChart, Pie, Cell } from 'recharts'
import './PopulationGroup.css'

const groupPopulationByAge = (population, color) => {
  const ageGroups = population
    .map(p => ({ name: p.age, value: p.male + p.female, color }))
  return ageGroups
}

const groupPopulationBySex = (population, maleColor, femaleColor) => {
  const maleSum = population
    .reduce((sum, p) => {
      return sum + p.male
    }, 0)
  const femaleSum = population
    .reduce((sum, p) => {
      return sum + p.female
    }, 0)
  return [
    { name: 'male', value: maleSum, color: maleColor },
    { name: 'female', value: femaleSum, color: femaleColor }
  ]
}

class App extends Component {
  render () {
    const { nowPopulation, futurePopulation } = this.props
    const nowAgeGroups = groupPopulationByAge(nowPopulation, '#4CAF50')
    const nowSexGroups = groupPopulationBySex(nowPopulation, '#2196F3', '#E91E63')
    const futureAgeGroups = groupPopulationByAge(futurePopulation, '#81C784')
    const futureSexGroups = groupPopulationBySex(futurePopulation, '#BBDEFB', '#F8BBD0')
    return (
      <div className="flex">
        <span className="flex-item center">
          <h2>Now</h2>
          <ResponsiveContainer height={300} width="100%">
            <PieChart margin={{ left: 50, right: 50, top: 30, bottom: 30 }}>
              <Tooltip />
              <Pie data={nowSexGroups} outerRadius={80}>
                {
                  nowSexGroups.map((entry, index) => (<Cell fill={entry.color} />))
                }
              </Pie>
              <Pie data={nowAgeGroups} innerRadius={90} outerRadius={110} label={(object) => (object.name)}>
                {
                  nowAgeGroups.map((entry, index) => (<Cell fill={entry.color} />))
                }
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </span>
        <span className="flex-item center">
          <h2>Future</h2>
          <ResponsiveContainer height={300} width="100%">
            <PieChart margin={{ left: 50, right: 50, top: 30, bottom: 30 }}>
              <Tooltip />
              <Pie data={futureSexGroups} outerRadius={80}>
                {
                  futureSexGroups.map((entry, index) => (<Cell fill={entry.color} />))
                }
              </Pie>
              <Pie data={futureAgeGroups} innerRadius={90} outerRadius={110} label={(object) => (object.name)}>
                {
                  futureAgeGroups.map((entry, index) => (<Cell fill={entry.color} />))
                }
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </span>
      </div>
    );
  }
}

export default App
