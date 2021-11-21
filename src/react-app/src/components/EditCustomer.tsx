import React, { useState } from 'react';

type Props = {
  idCustomer: string
  customer: Customer
  editCustomer: (id: string, customer: Customer, event: React.FormEvent) => void
  switchComponent: (componentName: string) => void
}

const EditCustomer: React.FC<Props> = ({
  idCustomer,
  customer,
  editCustomer,
  switchComponent,
}) => {
  const [formData, setFormData] = useState<Customer | any>(customer);
  
  const handleForm = (event: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.currentTarget.id]: event.currentTarget.value,
    });
  };
  
  return (
    <div className='AddCustomer'>
      <button onClick={() => switchComponent('customers-list')}>Voltar</button>
      <form className='Form' onSubmit={(event) => editCustomer(idCustomer, formData, event)}>
        <label htmlFor='nome'>
          Nome
          <input onChange={handleForm} type='text' id='nome' value={formData.nome} />
        </label>
        <label htmlFor='sobrenome'>
          Sobrenome
          <input onChange={handleForm} type='text' id='sobrenome' value={formData.sobrenome} />
        </label>
        <label htmlFor='idade'>
          Idade
          <input onChange={handleForm} type='number' id='idade' value={formData.idade} />
        </label>
        <button disabled={formData === undefined ? true : false}>
          Editar
        </button>
      </form>
    </div>
  );
};

export default EditCustomer;

