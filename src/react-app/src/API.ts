import axios, { AxiosResponse } from 'axios';

export const getCustomers = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const customers: AxiosResponse<ApiDataType> = await axios.get('/api/clientes');
    return customers;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const getOneCustomer = async (id: number): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const customer: AxiosResponse<ApiDataType> = await axios.get(`/api/clientes/${id}`);
    return customer;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const addCustomer = async (formData: Customer): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const customer: Omit<Customer, 'id'| 'data_criado' | 'data_atualizado'> = {
      nome: formData.nome,
      sobrenome: formData.sobrenome,
      idade: formData.idade,
    };
    const saveCustomer: AxiosResponse<ApiDataType> = await axios.post('/api/clientes', customer);
    return saveCustomer;
  }
  catch (error) {
    throw new Error(`${error}`);
  }
};

export const updateCustomer = async (id: string, formData: Customer): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const customer: Omit<Customer, 'id' | 'data_criado' | 'data_atualizado'> = {
      nome: formData.nome,
      sobrenome: formData.sobrenome,
      idade: formData.idade,
    };
    const updatedCustomer: AxiosResponse<ApiDataType> = await axios.put(`/api/clientes/${id}`, customer);
    return updatedCustomer;
  }
  catch (error) {
    throw new Error(`${error}`);
  }
};

export const deleteCustomer = async (id: string): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedCustomer: AxiosResponse<ApiDataType> = await axios.delete(`/api/clientes/${id}`);
    return deletedCustomer;
  }
  catch (error) {
    throw new Error(`${error}`);
  }
};

