import random from './random'

function random_tendency () {
  const age = { subject: 'Age', value: random(0, 100), fullMark: 100 }
  const sex = { subject: 'Gender', value: random(0, 100), fullMark: 100 }
  const interest = { subject: 'Interest', value: random(0, 100), fullMark: 100 }
  const local = { subject: 'Local', value: random(0, 100), fullMark: 100 }
  const device = { subject: 'Device', value: random(0, 100), fullMark: 100 }
  const culture = { subject: 'Culture', value: random(0, 100), fullMark: 100 }
  return [ age, sex, interest, local, device, culture ]
}

export default random_tendency
