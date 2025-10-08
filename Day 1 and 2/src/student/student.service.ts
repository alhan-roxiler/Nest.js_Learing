import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
	private StudentsData = [
		{id:1,name:'Alhan',age:21},
		{id:2,name:'Pernav',age:22},
		{id:3,name:'Gona',age:22},
		{id:4,name:'Shona',age:22},
	];
    // Get service
	getAllStudent(){
		return this.StudentsData;
	}
	
	getStudentById(id:number){
		const student = this.StudentsData.find(s=>s.id===id);
		if(!student) throw new NotFoundException("Not found");
		return student;
	}

	// Post
	createStudent(data:{name:string,age:number}){
	 const newStudent = {
		id:Date.now(),
		...data
	 }
	 this.StudentsData.push(newStudent);
	 return newStudent;
	}

	//put
	updateStudentById(id:number,data:{name:string,age:number}){
		
		const findIndex = this.StudentsData.findIndex(stud=>stud.id===id);
		if(findIndex === -1) throw new NotFoundException("ID not found");
		this.StudentsData[findIndex]={id,...data};
		return `Update at index: ${findIndex}`;
	}

	//Patch
	patchStudent(id:number,data:Partial<{name:string,age:number}>){
		const student = this.getStudentById(id);
		Object.assign(student,data);
		return student;
	}

	//detel
	deletStudent(id:number){
		const findIndex = this.StudentsData.findIndex(stud=>stud.id===id);
		if(findIndex === -1) throw new NotFoundException("ID not found");
		const deletedStudent = this.StudentsData.splice(findIndex,1);
		return {message:'Student has been Deleted', student:deletedStudent[0]};

	}
}
