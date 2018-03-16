module.exports = () => {
  return '#' + (~~(Math.random() * (Math.pow(2, 24) - 1))).toString(16)
}
