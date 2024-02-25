import jwt from 'jsonwebtoken'

// eslint-disable-next-line consistent-return
export default (req, res, next) => {
  const { authorization } = req.headers
  if (!authorization) {
    return res.status(401).json({ errors: ['Login required'] })
  }

  const [, token] = authorization.split(' ')
  console.log(authorization)

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET)
    const { id, email } = dados
    req.userId = id
    req.userEmail = email
    next()
  } catch (error) {
    res.status(401).json({ errors: ['Token expirado ou inválido'] })
  }
}
