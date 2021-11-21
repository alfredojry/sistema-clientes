import React from 'react';

type Props = CustomerProps & {
  editCustomer: (id: string, customer: Customer, event: React.FormEvent) => void
  deleteCustomer: (id: string) => void
  switchComponent: (componentName: string) => void
  showEdit: (event: React.MouseEvent) => void
}

const CustomerView: React.FC<Props> = ({
  customer,
  editCustomer,
  deleteCustomer,
  switchComponent,
  showEdit,
}) => {
  const { id, nome, sobrenome, idade, data_criado, data_atualizado } = customer;
  const criado: Date = new Date(data_criado);
  const atualizado: Date = new Date(data_atualizado);
  if (!customer) return (<div>Carregando...</div>);
  return (
    <div className='Card'>
      <h1>{id}) {nome} {sobrenome}</h1>
      <h2>Idade: {idade}</h2>
      <p>Criado: {criado.toLocaleString()}</p>
      <p>Atualizado: {atualizado.toLocaleString()}</p>
      <div>
        <button onClick={() => switchComponent('customers-list')} >Voltar</button>
        <button onClick={showEdit} id={String(id)}>Atualizar</button>
        <button onClick={() => deleteCustomer(String(id))} id={String(id)}>Apagar</button>
      </div>
    </div>
  );
}

export default CustomerView;
