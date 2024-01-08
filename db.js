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

function selectCustomer(id) {
  return customers.find(c => c.id === id);
}

function insertCustomer(customer) {
  return customers.push(customer);
}

function updateCustomer(id, customerData){
  const customer = customers.find(c => c .id === id ) ;
  if(!customer) return;
  customer.nome = customerData.nome;
  customer.idade = customerData.idade;
  customer.uf = customerData.uf;
}

function deleteCustomer(id){
  const index = customers.findIndex(c => c.id === id);
  customers.splice(index, 1);
}

module.exports = {
  selectCustomers,
  selectCustomer,
  insertCustomer,
  updateCustomer,
  deleteCustomer
}