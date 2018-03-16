module.exports = (number, precision) => {
  let exp = Math.pow(10, precision)
  return Math.round(number * exp) / exp
}
