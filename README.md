# Projeto full-stack sistema-clientes

API + Interface Web para cadastro de clientes

## Tecnologias

* Front-End: Typescript, React, CSS (por fazer)
* Back-End: Typescript, Node, Express, SQLite

## Rotas da API

### 1. Listar clientes

#### Obter todos os clientes

```
GET /api/clientes
```

#### Filtrar clientes por nome

```
GET /api/clientes?nome={name}
```

### 2. Listar um cliente por ID

```
GET /api/clientes/{id}
```

### 3. Cadastro de clientes

```
POST /api/clientes
```

### 4. Atualizar dados de cliente existente por ID

```
PUT /api/clientes/{id}
```

### 4. Apagar cadastro de cliente existente por ID

```
DELETE /api/clientes/{id}
```

## Esquema tabela de clientes

| coluna | tipo |
| - | - |
| id | INTEGER |
| nome | TEXT |
| sobrenome | TEXT |
| idade | INTEGER |
| data_criado | INTEGER |
| data_atualizado | INTEGER |

Observaçôes:

* SQLite automáticamente asigna o `id` da fila como `rowid`
* SQLite não possui um formato de datas, então na coluna data é assinado o tempo UNIX _timestamp_.

## Instalação

### Requisitos
* GIT
* Node >= 16.13.0
* NPM >= 8.1.0

Para desenvolvimento, o server está rolando na porta 4000 e em outra instancia de node o cliente react estará rolando na porta 3000.
Dada a configuração de proxi do cliente react, ele faz requisições na porta de node sem problema.

### 1. Clonar este repositório

```sh
git clone git@github.com:alfredojry/sistema-clientes.git
```

### 2. Configurar e iniciar servidor

```sh
cd sistema-clientes
npm install
npm run dev
```

### 3. Configurar e iniciar cliente em outra aba de terminal

```sh
cd src/react-app
npm install
npm start
```

## Compilação

## Demonstração
Em progreso...

