import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';



@Injectable()
export class UsersService {
	constructor(@InjectRepository(User)  private repo:Repository<User>){}
	
	async createUser(body:CreateUserDto){
		 // Create new User Instance 
			const user = this.repo.create({...body});
		// save it to the database
			return await this.repo.save(user);
		}
	
	async FindUserById(id:number){ 
		if(!id) throw new NotFoundException("Invalid ID");
		return await this.repo.findOneBy({id});
	}

	async Find(email:string){
		return await this.repo.find({where: {email}});
	}



    async Update( id:number, attribute: Partial<User> ){
		const user = await this.FindUserById(id);
		if(!user) throw new NotFoundException("user id is not valid");
		Object.assign(user,attribute);
	    const  save = await this.repo.save(user);
		return  save;
	}

	async Remove(id:number){
		const user = await this.FindUserById(id);
		if(!user) throw new NotFoundException("user id is not valid");
		const deleted = await this.repo.remove(user);
		return deleted;
	}
    






}
