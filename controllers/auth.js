import jwt from 'jsonwebtoken'
import { config } from '../config.js'

const auth = (req, res) => {
  console.log('/auth', req.body)
  if (
    req.body.username === 'username'
    && req.body.password === 'password'
    ) {
    res.json({
      status: true,
      user: { id: 1, name: 'John Doe' },
      token: jwt.sign({ id: 1 }, config.sekretKey)
    })
  } else {
    res.status(401).json({ status: false, message: 'Pair login/password is incorrect'})
  }

}

export default auth