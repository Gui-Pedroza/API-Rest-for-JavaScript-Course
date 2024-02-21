import User from '../models/User'

// eslint-disable-next-line import/prefer-default-export
export const store = async (req, res) => {
  try {
    console.log(req.body)
    const novoUser = await User.create(req.body)
    res.status(201).json(novoUser)
  } catch (error) {
    res.status(400).json({ erros: error.errors.map((e) => e.message) })
  }
}

export const index = async (req, res) => {
  try {
    const users = await User.findAll()
    res.status(200).json(users)
  } catch (error) {
    res.status(400).json({ erros: error.errors.map((e) => e.message) })
  }
}

export const show = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id)
    if (user) {
      res.status(200).json(user)
    } else throw new Error('Registro não encontrado')
  } catch (error) {
    res.status(400).json(error.message)
  }
}

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
  } catch (error) {
    res.status(400).json({ erros: error.errors.map((e) => e.message) })
  }
}
