const reqTime = (req, res, next) => {
  const now = new Date()
  req.reqTime = now
  next()
}

export default reqTime