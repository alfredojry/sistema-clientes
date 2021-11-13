# Projeto full-stack sistema-clientes

API + Interface Web para cadastro de clientes

## Tecnologias

* Front-End (por fazer): Typescript, React, Redux
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

