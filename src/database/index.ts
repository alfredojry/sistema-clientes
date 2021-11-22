import sqlite3 from 'sqlite3';

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

const database = new sqlite3.Database(DB_SOURCE, errorDB => {
  if (errorDB) {
    console.log(errorDB);
    throw errorDB;
  } else {
    console.log('\n> Database connected succesfully');
    database.run(SQL_CUSTOMERS_CREATE, function (errorTB) {
      if (errorTB) {
        console.log(errorTB);
      } else {
        console.log('\n> Table succesfully created or connected if it exists');
      }
    });
  }
});

export default database;
