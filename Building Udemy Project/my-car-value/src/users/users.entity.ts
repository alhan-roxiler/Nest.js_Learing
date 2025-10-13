import {Entity,PrimaryGeneratedColumn,Column,AfterInsert, AfterRemove,OneToMany} from "typeorm";
import { Report } from "../reports/reports.entity";

@Entity()
export class User{
   @PrimaryGeneratedColumn()
   id:number;

   @Column()
   email:string;

   @Column()
   password:string;

   @AfterInsert()
   logAfterInsert() {
   console.log(`Inserted entity with id ${this.id}`);
   }

   @AfterRemove()
   logAfterRemove() {
   console.log(`Inserted entity with id ${this.id}`);
   }

   @OneToMany(()=>Report, (report)=>report.user)
   reports:Report[];

   @Column({default:false})
   isAdmin:boolean;

}