import { Controller,Post,Body,Param,Query,Patch,Delete, Get , UseInterceptors,ClassSerializerInterceptor,Session} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Serialize} from 'src/interceptor/serialize.interceptor';
import { UserDto } from './dto/user.dto';
import { AuthService } from '../users/auth.service';





@Controller('auth')
// @UseInterceptors(new SerializeInterceptor(UserDto))
@Serialize(UserDto)
export class UsersController {
	
	constructor(
		private readonly usersService:UsersService,
		private readonly authService: AuthService
	){}

	

	@Post('/signup')
	async createUser(@Body() body:CreateUserDto, @Session() session: any){
		const user = await this.authService.signup(body.email, body.password);
		session.userId = user.id;
		return user;
	}

	@Get('/whoami')
	whoAmI(@Session() session:any){
		return this.usersService.FindUserById(session.userId);
	}

	@Post('/signin')
	async signin(@Body() body:CreateUserDto, @Session() session: any ){
		const user = await this.authService.signin(body.email, body.password);
		session.userId = user.id;
		return user;	
	} 
	@Post('/signout')
	signOut(@Session() session:any){
		session.userId = null;
		return {message: "successfully signed out"};
	}

	@Get('/:id')
	@UseInterceptors(ClassSerializerInterceptor)
	async findUserById(@Param('id') id: string) {
		return this.usersService.FindUserById(Number(id));
	}

	@Get()
	async findUserByEmail(@Query('email') email: string) {
		return this.usersService.Find(email);
	}
	
	@Patch('/:id')
	async updateUser(@Param('id') id: string, @Body() attribute: Partial<CreateUserDto>) {
		return this.usersService.Update(Number(id), attribute);
	}
	
	
	@Delete('/:id')
	async removeUser(@Param('id') id: string) {
		return this.usersService.Remove(Number(id));
	}

	

}
