import React, { useState } from 'react';

type Props = {
  saveCustomer: (event: React.FormEvent, formData: Customer | any) => void
  switchComponent: (componentName: string) => void
}

const AddCustomer: React.FC<Props> = ({ saveCustomer, switchComponent }) => {
  const [formData, setFormData] = useState<Customer | {}>();
  
  const handleForm = (event: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.currentTarget.id]: event.currentTarget.value,
    });
  };
  
  return (
    <div className='AddCustomer'>
      <button onClick={() => switchComponent('customers-list')}>Voltar</button>
      <form className='Form' onSubmit={(event) => saveCustomer(event, formData)}>
        <label htmlFor='nome'>
          Nome
          <input onChange={handleForm} type='text' id='nome' />
        </label>
        <label htmlFor='sobrenome'>
          Sobrenome
          <input onChange={handleForm} type='text' id='sobrenome' />
        </label>
        <label htmlFor='idade'>
          Idade
          <input onChange={handleForm} type='number' id='idade' />
        </label>
        <button disabled={formData === undefined ? true : false}>
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default AddCustomer;

