import { Controller,Get,Body,Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create.customer.dto';

@Controller('customer')
export class CustomerController {
	constructor ( private readonly customerService:CustomerService ){}

	@Get()
		getCustomers(){
			return this.customerService.getAllCustomer()
		}

	@Post()
		addCustomer(@Body() createCustomerDto:CreateCustomerDto){
			return this.customerService.addCustomer(createCustomerDto);
		}
	
	
}
