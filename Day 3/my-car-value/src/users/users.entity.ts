import {Entity,PrimaryGeneratedColumn,Column,AfterInsert, AfterRemove} from "typeorm";

@Entity()
export class User{
   @PrimaryGeneratedColumn()
   id:number;

   @Column()
   email:string;

   @Column()
   password:string

   @AfterInsert()
   logAfterInsert() {
   console.log(`Inserted entity with id ${this.id}`);
   }

   @AfterRemove()
   logAfterRemove() {
   console.log(`Inserted entity with id ${this.id}`);
   }

}