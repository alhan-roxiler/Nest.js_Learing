import { Injectable } from '@nestjs/common';
import {Customer} from './interface/customer.Interface'
import { CreateCustomerDto } from './dto/create.customer.dto';

@Injectable()
export class CustomerService {
	private customers:Customer[] = [];

	getAllCustomer():Customer[]{
		return this.customers;
	}

	addCustomer(createCustomerDto:CreateCustomerDto):Customer{
		const newCustomer:Customer ={
			id:Date.now(),
			...createCustomerDto
		};
		this.customers.push(newCustomer);
		return newCustomer 
	}
}
