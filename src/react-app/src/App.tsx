import React, { useState, useEffect } from 'react';
import './App.css';
import { getCustomers, getOneCustomer, addCustomer, updateCustomer, deleteCustomer } from './API';
import CustomersList from './components/CustomersList';
import AddCustomer from './components/AddCustomer';
import CustomerView from './components/CustomerView';
import EditCustomer from './components/EditCustomer';

function App() {
  
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [view, setView] = useState('customers-list');
  const [oneCustomer, setOneCustomer] = useState<Customer | any>({});
  const switchComponent = (componentName: string) => setView(componentName);
  
  useEffect(() => {
    fetchCustomers();
  }, []);
  
  const fetchCustomers = (): void => {
    getCustomers()
    .then(({ data }: Customer[] | any) => setCustomers(data))
    .catch((error: Error) => console.log(error));
  };
  
  const fetchOneCustomer = (id: number): void => {
    getOneCustomer(id)
    .then(({ data }: Customer | any) => setOneCustomer(data))
    .catch((error: Error) => console.log(error));
  };
  
  const handleSaveCustomer = (event: React.FormEvent, formData: Customer): void => {
    event.preventDefault();
    addCustomer(formData)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error('Error! Customer not saved')
        }
        // setCustomers(data)
        if (data.id) {
          fetchOneCustomer(data.id)
        }
        setView('customer');
      })
      .catch(error => console.log(error));
  };
  
  const handleShowCustomer = (event: React.MouseEvent) => {
    const id = Number(event.currentTarget.id);
    setView('customer');
    fetchOneCustomer(id);
  };
  
  const handleShowEdit = (event: React.MouseEvent) => {
    const id = Number(event.currentTarget.id);
    setView('edit-customer');
    fetchOneCustomer(id);
  };
  
  const handleUpdateCustomer = (id: string, formData: Customer | any, event: React.FormEvent): void => {
  event.preventDefault();
    updateCustomer(id, formData)
      .then(({ status, data }) => {
        if (status !==200) {
          throw new Error('Error! Customer not updated');
        }
        if (data.id) {
          fetchOneCustomer(data.id)
        }
        setView('customer');  
      })
      .catch(error => console.log(error));
  };
  
  const handleDeleteCustomer = (id: string): void => {};
  
  return (
    <div className="App">
      {view === 'customers-list' && <CustomersList
        customers={customers}
        switchComponent={switchComponent}
        showCustomerById={handleShowCustomer}
        editCustomer={handleUpdateCustomer}
        showEdit={handleShowEdit}
      />}
      {view === 'add-customer' && <AddCustomer
        saveCustomer={handleSaveCustomer}
        switchComponent={switchComponent}
      />}
      {view === 'customer' && <CustomerView
        customer={oneCustomer}
        switchComponent={switchComponent}
        editCustomer={handleUpdateCustomer}
        showEdit={handleShowEdit}
      />}
      {view === 'edit-customer' && <EditCustomer
        switchComponent={switchComponent}
        editCustomer={handleUpdateCustomer}
        idCustomer={oneCustomer.id}
        customer={oneCustomer}
      />}
    </div>
  );
}

export default App;
