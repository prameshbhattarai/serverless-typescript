import {customer1, customer2, CustomerSchema} from "../../app/model/Customer";

/**
 * This is a Mock class for Customer Service.
 */
export class MockCustomerService {
  public async getAll(): Promise<Array<CustomerSchema>> {
    console.log(`Response from MockCustomerService`);
    console.log(`Get all customer`);

    return Promise.resolve([customer1, customer2]);
  }

  public async getOne(id: number): Promise<CustomerSchema> {
    console.log(`Response from MockCustomerService`);
    console.log(`Getting customer by id ${id}`);

    const resolved = [customer1, customer2].find((customer) => customer.id === id);
    if (!resolved) throw Error(`Unable to find the customer with id ${id}`);
    return Promise.resolve(resolved);
  }

  public async create(customer: CustomerSchema): Promise<Boolean> {
    console.log(`Response from MockCustomerService`);
    console.log('Saving customer', customer);

    return Promise.resolve(true);
  }

  public async update(id: number, customer: CustomerSchema) {
    console.log(`Response from MockCustomerService`);
    console.log('Updating customer', customer);

    const resolved = [customer1, customer2].find((customer) => customer.id === id);
    if (!resolved) throw Error(`Unable to find the customer with id ${id}`);

    return Promise.resolve(true);
  }

  public async delete(id: number) {
    console.log(`Response from MockCustomerService`);
    console.log(`Removing customer by id ${id}`);

    const resolved = [customer1, customer2].find((customer) => customer.id === id);
    if (!resolved) throw Error(`Unable to find the customer with id ${id}`);

    return Promise.resolve(true);
  }
}
