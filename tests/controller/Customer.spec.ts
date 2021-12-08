import 'reflect-metadata';
import {expect} from 'chai';
import {describe, it} from "mocha";
import {createExpressServer, useContainer} from "routing-controllers";
import {Container} from "typedi";
import {Customer} from "../../app/controller/Customer";
import {agent as request} from "supertest";
import {customer1, customer2} from "../../app/model/Customer";
import {CustomerService} from "../../app/service/CustomerService";
import {MockCustomerService} from "./MockCustomerService";

// if we want to inject mock service instead of actual service
Container.set(CustomerService, new MockCustomerService())

useContainer(Container);
const app = createExpressServer( {
  controllers: [Customer],
  cors: true
});
const appServer= request(app);

const expectedResponse = [customer1, customer2];

describe("Customer Controller Integration Test", () => {

  it('should get all customers',async function () {
    const result = await appServer.get('/customer').send();
    expect(result.status).to.equal(200);
    expect(result.body).to.eql(expectedResponse);
  });

  it('should get customer by id',async function () {
    const result = await appServer.get('/customer/1').send();
    expect(result.status).to.equal(200);
    expect(result.body).to.eql(expectedResponse[0]);
  });

  it('should throw error if unable to get customer by id',async function () {
    const result = await appServer.get('/customer/123').send();
    expect(result.status).to.equal(500);
    expect(result.body.message).to.eql('Unable to find the customer with id 123');
  });
});

