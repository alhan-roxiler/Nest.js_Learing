import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.Dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
	constructor(@InjectRepository(User)  private repo:Repository<User>){}
	
	async createUser(body:CreateUserDto){
		 // Create new User Instance 
			const user = this.repo.create({...body});
		// save it to the database
			return await this.repo.save(user);
		}
}
