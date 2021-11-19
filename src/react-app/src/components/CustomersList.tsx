import React from 'react';
import CustomerCard from './CustomerCard';

type Props = {
  customers: Customer[]
  switchComponent: (componentName: string) => void
  showCustomerById: (event: React.MouseEvent) => void
  editCustomer: (id: string, customer: Customer, event: React.FormEvent) => void
  showEdit: (event: React.MouseEvent) => void
}

const CustomersList: React.FC<Props> = ({ customers, switchComponent, showCustomerById, editCustomer, showEdit }) => {
  
  return (
    <div className="CustomersList">
      <button onClick={() => switchComponent('add-customer')}>
        Cadastrar cliente
      </button>
      {customers.map((customer: Customer) => (
        <CustomerCard
          customer={customer}
          key={Number(customer.id)}
          showCustomerById={showCustomerById}
          editCustomer={editCustomer}
          showEdit={showEdit}
        />
      ))}
    </div>
  );
}

export default CustomersList;

