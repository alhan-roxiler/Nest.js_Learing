import {Entity,PrimaryGeneratedColumn,Column, ManyToOne,AfterInsert,AfterRemove} from 'typeorm';
import { User } from '../users/users.entity';

@Entity()
export class Report{

	@PrimaryGeneratedColumn()
	id:number;
    
	@Column()
	make:string;

	@Column()
	model:string;

	@Column()
	year:number;

	@Column()
	milage:number;	

	@Column()
	lng:number;

	@Column()
	lat:number;

	@Column()
	price:number;

	@ManyToOne(()=>User, (user)=>user.reports)
	user:User;

	
	@AfterInsert()
	logAfterInsert() {
		console.log(`Inserted report with id ${this.id}`);
	}

	@AfterRemove()
	logAfterRemove() {
		console.log(`Removed report with id ${this.id}`);
	}
     
	 
	
}