import { Router } from 'express';
import customersDbController from '../controllers/customers';
import Customer from '../models/customer'

const router = Router();

router.get('/clientes', (req, res) => {
  if (!req.query.hasOwnProperty('nome')) {
    customersDbController.listCustomers(clientes => {
      res.json(clientes);
    });
  } else {
    const { nome } = req.query;
    if (nome) {
      customersDbController.listCustomersByName(nome, clientes => {
        res.json(clientes);
      });
    } else {
      customersDbController.listCustomers(clientes => {
        res.json(clientes);
      });
    }
  }
});

router.get('/clientes/:id', (req, res) => {
  const { id } = req.params;
  customersDbController.getCustomersById(id, cliente => {
    res.json(cliente);
  });
});

router.post('/clientes', (req, res) => {
  const { nome, sobrenome, idade } = req.body;
  const customer: Customer = {
    nome,
    sobrenome,
    idade,
    data_criado: Date.now(),
    data_atualizado: Date.now()
  }
  customersDbController.insertCustomer(customer, id => {
    if (id) {
      res.json({ id });
    } else {
      res.status(400).send();
    }
  });
});

router.put('/clientes/:id', (req, res) => {
  const { nome, sobrenome, idade } = req.body;
  const id = Number(req.params.id);
  const customer: Customer = {
    nome,
    sobrenome,
    idade,
    data_atualizado: Date.now()
  };
  customersDbController.editCustomer(id, customer, found => {
    if (found) {
      res.status(204).send();
    } else {
      res.status(404).send();
    }
  });
});

router.delete('/clientes/:id', (req, res) => {
  const id = Number(req.params.id);
  customersDbController.deleteCustomer(id, found => {
    if (found) {
      res.status(204).send();
    } else {
      res.status(404).send();
    }
  });
});

export default router;
