import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BlogEntity {
    @PrimaryGeneratedColumn()
    id:number;
} 