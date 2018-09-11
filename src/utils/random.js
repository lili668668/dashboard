function random (min, max) {
  const number = (Math.random() * (max - min)) + min
  return Math.round(number * 100) / 100
}

export default random
