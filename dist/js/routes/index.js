"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customers_1 = __importDefault(require("../controllers/customers"));
const router = (0, express_1.Router)();
router.get('/clientes', (req, res) => {
    if (!req.query.hasOwnProperty('nome')) {
        customers_1.default.listCustomers(clientes => {
            res.json(clientes);
        });
    }
    else {
        const { nome } = req.query;
        if (nome) {
            customers_1.default.listCustomersByName(`${nome}`, clientes => {
                res.json(clientes);
            });
        }
        else {
            customers_1.default.listCustomers(clientes => {
                res.json(clientes);
            });
        }
    }
});
router.get('/clientes/:id', (req, res) => {
    const id = Number(req.params.id);
    customers_1.default.getCustomersById(id, cliente => {
        res.json(cliente);
    });
});
router.post('/clientes', (req, res) => {
    const { nome, sobrenome, idade } = req.body;
    const customer = {
        nome,
        sobrenome,
        idade,
        data_criado: Date.now(),
        data_atualizado: Date.now()
    };
    customers_1.default.insertCustomer(customer, id => {
        if (id) {
            res.json({ id });
        }
        else {
            res.status(400).send();
        }
    });
});
router.put('/clientes/:id', (req, res) => {
    const { nome, sobrenome, idade } = req.body;
    const id = Number(req.params.id);
    const customer = {
        nome,
        sobrenome,
        idade,
        data_atualizado: Date.now()
    };
    customers_1.default.editCustomer(id, customer, found => {
        if (found) {
            res.status(204).send();
        }
        else {
            res.status(404).send();
        }
    });
});
router.delete('/clientes/:id', (req, res) => {
    const id = Number(req.params.id);
    customers_1.default.deleteCustomer(id, found => {
        if (found) {
            res.status(204).send();
        }
        else {
            res.status(404).send();
        }
    });
});
exports.default = router;
