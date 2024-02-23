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
    } else {
      res.status(400).json({ errors: 'Registro não encontrado' })
    }
  } catch (error) {
    res.status(400).json({ erros: error.errors.map((e) => e.message) })
  }
}

export const update = async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).json({ errors: 'ID não enviado' })
    }
    const user = await User.findByPk(req.params.id)
    if (!user) {
      return res.status(400).json({ errors: 'Usuário não encontrado' })
    }
    const updatedUser = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    return res.status(200).json(updatedUser)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

export const deleteUser = async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).json({ errors: 'ID não enviado' })
    }
    const user = await User.findByPk(req.params.id)
    if (!user) {
      return res.status(400).json({ errors: 'Usuário não encontrado' })
    }
    const rowsDeleted = await User.destroy({
      where: {
        id: req.params.id,
      },
    })
    return res.status(200).json(rowsDeleted)
  } catch (error) {
    res.status(400).json(error.message)
  }
}
