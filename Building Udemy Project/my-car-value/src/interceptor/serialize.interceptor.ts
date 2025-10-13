import {  plainToInstance } from "class-transformer";
import { CallHandler, ExecutionContext, NestInterceptor, UseInterceptors } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export function Serialize(dto: any) {
	return UseInterceptors(new SerializeInterceptor(dto));
}



export class SerializeInterceptor implements NestInterceptor {

  constructor(private dto: any) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
	// Run something before a request is handled by the request handler
	return next.handle().pipe(
			  map((data: any) => {
				// Run something before the response is sent out
				return plainToInstance(this.dto, data, {
				  excludeExtraneousValues: true,
				});
			  })	

		);
  }
}
