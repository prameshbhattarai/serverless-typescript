import {customer1, customer2, CustomerSchema} from "../model/Customer";
import {Service} from "typedi";

@Service()
export class CustomerService {

  public async getAll(): Promise<Array<CustomerSchema>> {
    console.log(`Get all customer`);

    return Promise.resolve([customer1, customer2]);
  }

  public async getOne(id: number): Promise<CustomerSchema> {
    console.log(`Getting customer by id ${id}`);

    const resolved = [customer1, customer2].find((customer) => customer.id === id);
    if (!resolved) throw Error(`Unable to find the customer with id ${id}`);
    return Promise.resolve(resolved);
  }

  public async create(customer: CustomerSchema): Promise<Boolean> {
    console.log('Saving customer', customer);

    return Promise.resolve(true);
  }

  public async update(id: number, customer: CustomerSchema) {
    console.log('Updating customer', customer);

    const resolved = [customer1, customer2].find((customer) => customer.id === id);
    if (!resolved) throw Error(`Unable to find the customer with id ${id}`);

    return Promise.resolve(true);
  }

  public async delete(id: number) {
    console.log(`Removing customer by id ${id}`);

    const resolved = [customer1, customer2].find((customer) => customer.id === id);
    if (!resolved) throw Error(`Unable to find the customer with id ${id}`);

    return Promise.resolve(true);
  }
}
