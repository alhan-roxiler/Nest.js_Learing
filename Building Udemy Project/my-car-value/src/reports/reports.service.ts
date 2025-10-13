import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import { CreateReportDto } from './dto/create-report.dto';
import { Report } from './reports.entity';
import { User } from 'src/users/users.entity';
import { GetEstimateDto } from './dto/get.estimate.dto';



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

	// Service to change the approval status of the report
	async changeApproval(id:number, approved:boolean){
		const report = await this.repo.findOne({where:{id}});
		if(!report){
			throw new NotFoundException('Report not found');
		}
		report.approved = approved;
		return this.repo.save(report);
	}

	async createEstimate(query:GetEstimateDto){
		const estimatePrice = await this.repo.createQueryBuilder().select('AVG(price)','price')
		.where('make = :make',{make:query.make})
		.andWhere('model = :model',{model:query.model})
		.andWhere('lng - :lng BETWEEN -5 AND 5',{lng:query.lng})
		.andWhere('lat - :lat BETWEEN -5 AND 5',{lat:query.lat})
		.andWhere('year - :year BETWEEN -3 AND 3',{year:query.year})
		.andWhere('approved IS TRUE')
		.orderBy('ABS(milage - :milage)','DESC')
		.setParameters({milage:query.milage})
		.limit(3)
		.getRawOne();
		return estimatePrice;
	
	}
}
