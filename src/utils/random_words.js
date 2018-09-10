import faker from 'faker'
import random from './random'

function random_words () {
  const city = faker.address.city()
  const country = faker.address.country()
  const state = faker.address.state()
  const jobTitle = faker.name.jobTitle()
  const jobType = faker.name.jobType()
  const sex = random(0, 2) === 0 ? 'male' : 'female'
  const old = `${Math.round(random(0, 100))} old`
  return [
    { text: city, value: random(40, 60) },
    { text: country, value: random(40, 60) },
    { text: state, value: random(40, 60) },
    { text: jobTitle, value: random(40, 60) },
    { text: jobType, value: random(40, 60) },
    { text: sex, value: random(40, 60) },
    { text: old, value: random(40, 60) },
  ]
}

export default random_words
