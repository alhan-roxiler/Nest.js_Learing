import { Controller,Post,Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.Dto';
import { UsersService } from './users.service';


@Controller('auth')
export class UsersController {
	constructor(private readonly usersService:UsersService){}

	@Post('/signup')
	creteUser(@Body() body:CreateUserDto ){
		return this.usersService.createUser(body);
	}
}
