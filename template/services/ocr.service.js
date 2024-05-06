const readCnh = async () => {
  return {
    name: "João",
    surname: "Silva",
    first_issue_date: "20/10/2004",
    birth: "20/10/1980",
    birth_city: "São Paulo",
    birth_uf: "SP",
    issue_date: "20/10/2004",
    valid_date: "20/10/2024",
    acc: false,
    rg: "123123123124",
    rg_issuer: "SSP",
    cpf: "12312312312",
    cnh_number: "12312312312",
    category: "A",
    citizenship: "Brasileira",
    observation: "Observação",
    photo: "base64 here",
  }
}

const readRg = async () => {
  return {
    name: "João",
    surname: "Silva",
    cpf: "12312312312",
    sex: "Masculino",
    birth: "20/10/1980",
    citizenship: "Brasileira",
    valid_date: "20/10/2024",
  }
}

export {
  readCnh,
  readRg
}
