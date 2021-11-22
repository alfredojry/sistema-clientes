"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../database"));
const customersDbController = {
    listCustomers: (callback) => {
        const sql = `
      SELECT rowid id, * FROM clientes 
    `;
        database_1.default.all(sql, [], (error, rows) => callback(rows));
    },
    listCustomersByName: (name, callback) => {
        const sql = `
      SELECT rowid id, * FROM clientes WHERE nome = '${name}'
    `;
        database_1.default.all(sql, [], (error, rows) => callback(rows));
    },
    getCustomersById: (id, callback) => {
        const sql = `
      SELECT rowid id, * FROM clientes WHERE rowid = '${id}'
    `;
        database_1.default.get(sql, [], (error, row) => callback(row));
    },
    insertCustomer: (customer, callback) => {
        const sql = `
    INSERT INTO clientes (nome, sobrenome, idade, data_criado, data_atualizado)
    VALUES (?, ?, ?, ?, ?)
    `;
        const { nome, sobrenome, idade, data_criado, data_atualizado } = customer;
        const params = [nome, sobrenome, idade, data_criado, data_atualizado];
        database_1.default.run(sql, params, function (error) {
            callback(this.lastID);
        });
    },
    editCustomer: (id, customer, callback) => {
        const sql = `
      UPDATE clientes SET nome = ?, sobrenome = ?, idade = ?, data_atualizado = ?
      WHERE rowid = ?
    `;
        const { nome, sobrenome, idade, data_atualizado } = customer;
        const params = [nome, sobrenome, idade, data_atualizado, id];
        database_1.default.run(sql, params, function (error) {
            callback(Boolean(this.changes));
        });
    },
    deleteCustomer: (id, callback) => {
        const sql = `
      DELETE FROM clientes
      WHERE rowid = ?
    `;
        database_1.default.run(sql, [id], function (error) {
            callback(!!this.changes);
        });
    },
};
exports.default = customersDbController;
