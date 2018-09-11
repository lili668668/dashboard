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
  const min = 20
  const max = 40
  return [
    { text: city, value: random(min, max) },
    { text: country, value: random(min, max) },
    { text: state, value: random(min, max) },
    { text: jobTitle, value: random(min, max) },
    { text: jobType, value: random(min, max) },
    { text: sex, value: random(min, max) },
    { text: old, value: random(min, max) },
  ]
}

export default random_words
