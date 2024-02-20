import User from '../models/User'

// eslint-disable-next-line import/prefer-default-export
export const store = async (req, res) => {
  console.log('Tá sendo chamada essa porra?')
  try {
    console.log(req.body)
    const novoUser = await User.create(req.body)
    res.status(201).json(novoUser)
  } catch (error) {
    res.status(400).json({ erros: error.errors.map((e) => e.message) })
  }
}

export const listAll = async (req, res) => {
  try {
    const users = await User.findAll()
    res.status(200).json(users)
  } catch (error) {
    res.status(400).json({ erros: error.errors.map((e) => e.message) })
  }
}

export const findOne = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id)
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ erros: error.errors.map((e) => e.message) })
  }
}
