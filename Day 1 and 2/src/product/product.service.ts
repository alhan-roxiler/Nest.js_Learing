import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private Products = [
	{id:1, name:'Iphone'},
	{id:2, name:'Iphone'},
	{id:3, name:'Iphone'},
  ]

  // Let's Creat an Method
  getAllProducts(){
	return this.Products;
  }

  getProductById(id:number){
	return this.Products.find(p=>p.id==id);
  }
}
