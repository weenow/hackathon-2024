import { readCnh, readRg } from '../../services/index.js'

const cnh = async (req, res) => {
  const result = await readCnh()
  res.status(200).send(result)
}

const rg = async (req, res) => {
  const result = await readRg()
  res.status(200).send(result)
}

export {
  cnh,
  rg
}
