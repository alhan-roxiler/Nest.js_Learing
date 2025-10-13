import { Body, Controller,Post, UseGuards,Patch,Param} from '@nestjs/common';
import { ReportsService } from './reports.service';
import { CreateReportDto } from './dto/create-report.dto';
import { AuthGuard } from '../guard/auth.guard';
import { CurrentUser } from '../users/decorator/current-user.decorator';
import { User } from '../users/users.entity';
import { CurrentUserInterceptor } from '../users/interceptor/current-user.interceptor';
import { UseInterceptors } from '@nestjs/common';
import { Serialize } from '../interceptor/serialize.interceptor';
import { ReportDto } from './dto/report.dto';
import { ApprovedReportDto } from './dto/report-approval.dto';
@UseGuards(AuthGuard)
// @UseInterceptors(CurrentUserInterceptor)
@Controller('reports')
export class ReportsController {
    constructor(private readonly reportsService: ReportsService){}


	@Post()
	@Serialize(ReportDto)  
	addReport(@Body() body: CreateReportDto, @CurrentUser() user: User){
		console.log(user);
		const result =  this.reportsService.create(body, user);
		return result;
	}
    
	
	@Patch('/:id')
	changeApproval(@Param('id') id: string, @Body() body: ApprovedReportDto){
		return this.reportsService.changeApproval(parseInt(id), body.approved);
	}

}
