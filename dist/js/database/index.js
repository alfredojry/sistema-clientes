"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3_1 = __importDefault(require("sqlite3"));
const DB_SOURCE = 'db.sqlite';
const SQL_CUSTOMERS_CREATE = `
  CREATE TABLE IF NOT EXISTS clientes (
    nome TEXT NOT NULL,
    sobrenome TEXT NOT NULL,
    idade INTEGER NOT NULL,
    data_criado INTEGER NOT NULL,
    data_atualizado INTEGER NOT NULL
  )
`;
const database = new sqlite3_1.default.Database(DB_SOURCE, errorDB => {
    if (errorDB) {
        console.log(errorDB);
        throw errorDB;
    }
    else {
        console.log('\n> Database connected succesfully');
        database.run(SQL_CUSTOMERS_CREATE, function (errorTB) {
            if (errorTB) {
                console.log(errorTB);
            }
            else {
                console.log('\n> Table succesfully created or connected if it exists');
            }
        });
    }
});
exports.default = database;
