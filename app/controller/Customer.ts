import { JsonController, Param, Body, Get, Post, Put, Delete } from 'routing-controllers';
import {Service} from "typedi";
import {CustomerService} from "../service/CustomerService";
import {CustomerSchema} from "../model/Customer";

@JsonController('/customer')
@Service()
export class Customer {

  constructor(private readonly customerService: CustomerService) {}

  @Get('/')
  public async getAll() {
    return this.customerService.getAll();
  }

  @Get('/:id')
  public async getOne(@Param('id') id: number) {
    return this.customerService.getOne(id);
  }

  @Post('/')
  public async post(@Body() customer: CustomerSchema) {
    return this.customerService.create(customer);
  }

  @Put('/customer/:id')
  public async put(@Param('id') id: number, @Body() customer: CustomerSchema) {
    return this.customerService.update(id, customer);
  }

  @Delete('/customer/:id')
  public async remove(@Param('id') id: number) {
    return this.customerService.delete(id);
  }

}
