interface Customer {
  id: number
  nome: string
  sobrenome: string
  idade: number
  data_criado: Date
  data_atualizado: Date
}

interface CustomerProps {
  customer: Customer
}

type ApiDataType = {
  message: string
  status: string
  customers: Customer[]
  customer?: Customer
  id?: number
}

