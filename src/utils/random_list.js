import faker from 'faker'
import random from './random'

function random_list () {
  const randomOne = () => {
    const score = random(0, 10)
    const countries = [faker.address.country(), faker.address.country()]
    const languages = [faker.name.jobTitle(), faker.name.jobTitle()]
    const devices = [faker.name.jobType(), faker.name.jobType()]
    const gender =  ['male', 'female']
    const age_range = [`${Math.round(random(0, 100))} old`, `${Math.round(random(0, 100))} old`]
    return { score, countries, languages, devices, gender, age_range }
  }
  const array = []
  for (let cnt = 0; cnt < 5;cnt++) {
    array.push(randomOne())
  }
  return array
}

export default random_list
