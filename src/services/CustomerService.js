const customers = [
    { id:1, firstName: 'pera', lastName: 'perovic', email:'pera@exm.com', products: [] },
    { id:2, firstName: 'jova', lastName: 'jovic', email:'jova@exm.com', products: [] },
    { id:3, firstName: 'mica', lastName: 'micic', email:'mica@exm.com', products: [] }
]
let nextId = 4
export default class CustomerService{
    list(){
        return customers
    }
    delete(customer){
        customers.splice(customers.indexOf(customer), 1)
    }
    newCustomer(newCustomer){
        newCustomer.id = nextId
        customers.push(newCustomer),
        nextId++
    }
    get(id){
        return customers.find(customer =>customer.id==id)
    }
    
}

export const customerService = new CustomerService()