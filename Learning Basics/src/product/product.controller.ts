import { Controller,Get, Param, ParseIntPipe } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
	constructor ( private readonly ProductService:ProductService){
	}

	@Get()
	getProduct(){
		return this.ProductService.getAllProducts();
	}

	// @Get(':id')
	// getById(@Param('id') id:string){
	// 	return this.ProductService.getProductById(Number(id));
	// }

	@Get(':id')
	getById(@Param('id', ParseIntPipe) id: number) {
	return this.ProductService.getProductById(id);
}
}
