import jwt from 'jsonwebtoken'
const secret = 'secret_key_string'

const auth = (req, res) => {
  console.log(req.body)
  if (
    req.body.name === 'username' &&
    req.body.password === 'password'
    ) {
    res.json({
      status: true,
      name: 'John Doe',
      token: jwt.sign({ id: 1 }, secret)
    })
  } else {
    res.status(401).json({ status: false})
  }

}

export default auth