const logger = (req, res, next) => {
  console.log(req)
  next()
}

export default logger