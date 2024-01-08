const customers = [
  {
    id: 1,
    nome: "Rafa",
    idade: 17,
    uf: "PR"
  },
  {
    id: 2,
    nome: "Luiz",
    idade: 24,
    uf: "MG"
  }
];

function selectCustomers() {
  return customers;
}

function selectCustomer(id){
  return customers.find(c => c.id === id);
}

function insertCustomer(customer){
  customer.push(customer);
}

module.exports = {
  selectCustomers,
  selectCustomer,
  insertCustomer
}