import Customer from '../../models/customer';
import database from '../../database';

const customersDbController = {

  listCustomers: (callback: (customers: Customer[]) => void) => {
    const sql = `
      SELECT rowid id, * FROM clientes 
    `;
    database.all(sql, [], (error, rows) => callback(rows));
  },
  
  listCustomersByName: (name: string, callback: (customers: Customer[]) => void) => {
    const sql = `
      SELECT rowid id, * FROM clientes WHERE nome = '${name}'
    `;
    database.all(sql, [], (error, rows) => callback(rows));
  },
  
  getCustomersById: (id: number, callback: (customer?: Customer) => void) => {
    const sql = `
      SELECT rowid id, * FROM clientes WHERE rowid = '${id}'
    `;
    database.get(sql, [], (error, row) => callback(row));
  },
  
  insertCustomer: (customer: Customer, callback: (id: number) => void) => {
    const sql = `
    INSERT INTO clientes (nome, sobrenome, idade, data_criado, data_atualizado)
    VALUES (?, ?, ?, ?, ?)
    `;
    const { nome, sobrenome, idade, data_criado, data_atualizado } = customer;
    const params = [nome, sobrenome, idade, data_criado, data_atualizado];
    database.run(sql, params, function(error) {
      callback(this.lastID);
    });
  },
  
  editCustomer: (id: number, customer: Customer, callback: (found: boolean) => void) => {
    const sql = `
      UPDATE clientes SET nome = ?, sobrenome = ?, idade = ?, data_atualizado = ?
      WHERE rowid = ?
    `;
    const { nome, sobrenome, idade, data_atualizado } = customer;
    const params = [nome, sobrenome, idade, data_atualizado, id];
    database.run(sql, params, function(error) {
      callback(Boolean(this.changes));
    });
  },
  
  deleteCustomer: (id: number, callback: (found: boolean) => void) => {
    const sql = `
      DELETE FROM clientes
      WHERE rowid = ?
    `;
    database.run(sql, [ id ], function(error) {
      callback(!!this.changes);
    });
  },

};

export default customersDbController;
