import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReportDto } from './dto/create-report.dto';
import { Report } from './reports.entity';
import { User } from 'src/users/users.entity';



@Injectable()
export class ReportsService {
	constructor( @InjectRepository(Report) private repo:Repository<Report> ){}

	// Service to add report to the the databse 
	create(body: CreateReportDto , user:User){
		const reportEntityInstance = this.repo.create(body);
		console.log(user);
		reportEntityInstance.user = user;
		return this.repo.save(reportEntityInstance);
	}
}
