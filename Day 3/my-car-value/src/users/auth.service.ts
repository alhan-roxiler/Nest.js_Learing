import { Injectable } from '@nestjs/common';
import { UsersService } from './users.service';
import { BadRequestException } from '@nestjs/common';

import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
	constructor(private readonly usersService: UsersService) { }

	async signup(email: string, password: string) {
		// 1. see if email is in use
		const user = await this.usersService.Find(email);
		if (user) throw new BadRequestException("email already exists");

		// 2. hash the users password
		const salt = randomBytes(8).toString('hex');
		const hash = (await scrypt(password, salt, 32)) as Buffer;

		// 3. join the hashed result and the salt together
		const result = salt + '.' + hash.toString('hex');

		// 4. create a new user and save it
		const newUser = await this.usersService.createUser({ email, password: result });

		return newUser;

	}

	async signin(email: string, password: string) {
		const [user] = await this.usersService.Find(email);
		if(!user) throw new BadRequestException("invalid credentials");

		const [salt, storedHash] = user.password.split('.');
		const hash = (await scrypt(password, salt, 32)) as Buffer;
		if(storedHash !== hash.toString('hex')) throw new BadRequestException("invalid credentials");
		return user; 
	}


}
