import { Controller, Get } from '@nestjs/common';
import { get } from 'http';

// @Controller('user')
// export class UserController {

// }

@Controller('user')
 export class UserController{
	@Get()
	getUser(){
		return 'Hi this is User Controller';
	}


 }
