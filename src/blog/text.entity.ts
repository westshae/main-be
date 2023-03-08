import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class TextEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    text:string;
} 