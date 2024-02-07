import Aluno from '../models/Aluno'

// eslint-disable-next-line import/prefer-default-export
export const index = async (req, res) => {
  const novoAluno = await Aluno.create({
    nome: 'Zezé',
    sobrenome: 'Dicamargo',
    email: 'zezinho@hotmail.com',
    idade: 54,
    peso: 100,
    altura: 1.78,
  })
  res.json(novoAluno)
}
