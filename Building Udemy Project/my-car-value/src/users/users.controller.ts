import { Controller,Post,Body,Param,Query,Patch,Delete, Get , UseInterceptors,ClassSerializerInterceptor,Session, UseGuards} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Serialize} from 'src/interceptor/serialize.interceptor';
import { UserDto } from './dto/user.dto';
import { AuthService } from '../users/auth.service';
import { CurrentUser } from './decorator/current-user.decorator';
import { CurrentUserInterceptor } from './interceptor/current-user.interceptor';
import { User } from './users.entity';
import { AuthGuard } from 'src/guard/auth.guard';



@Controller('auth')
// @UseInterceptors(new SerializeInterceptor(UserDto))
@Serialize(UserDto)
@UseInterceptors(CurrentUserInterceptor)
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

	// @Get('/whoami')
	// whoAmI(@Session() session:any){
	// 	return this.usersService.FindUserById(session.userId);
	// }
    @UseGuards(AuthGuard)
	@Get('/whoami')
	whoAmI(@CurrentUser() user:User){
		console.log(user);
		return user
	}

	@Post('/signin')
	async signin(@Body() body:CreateUserDto, @Session() session: any ){
		const user = await this.authService.signin(body.email, body.password);
		session.userId = user.id;
		session.email = user.email;
		return user;	
	} 
	@Post('/signout')
	signOut(@Session() session:any){
		session.userId = null;
		return {message: "successfully signed out"};
	}

	@Get('/:id')
	// @UseInterceptors(ClassSerializerInterceptor)
	async findUserById(@Param('id') id: string) {
		return this.usersService.findUserById(Number(id));
	}

	@Get()
	async findUserByEmail(@Query('email') email: string) {
		return this.usersService.find(email);
	}
	
	@Patch('/:id')
	async updateUser(@Param('id') id: string, @Body() attribute: Partial<CreateUserDto>) {
		return this.usersService.update(Number(id), attribute);
	}
	
	
	@Delete('/:id')
	async removeUser(@Param('id') id: string) {
		return this.usersService.Remove(Number(id));
	}

	

}
