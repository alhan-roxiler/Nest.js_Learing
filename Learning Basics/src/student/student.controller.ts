import { Controller,Get,Param,Body,Put,Post, Patch } from '@nestjs/common';
import { StudentService } from './student.service';


@Controller('student')
export class StudentController {
	constructor(private readonly studentService:StudentService){}
	@Get()
	getAllStudents(){
			return this.studentService.getAllStudent();
	}

	@Get(':id')
	getStudentById(@Param('id') id:string){
		return this.studentService.getStudentById(Number(id));
	}

	@Post()
	CreateNewStudent(@Body() body:{name:string,age:number}){
		return this.studentService.createStudent(body);
	}
    
	
	@Put(':id')
	UpdateStudentDetails(@Param('id') id:string, @Body() body:{name:string,age:number}){
		return this.studentService.updateStudentById(Number(id),body);
	}

	
	@Patch(':id')
	PatchStudentDetails(@Param('id') id:string, @Body() body: Partial<{name:string,age:number}>){
		return this.studentService.patchStudent(Number(id),body);
	}	
	
}


