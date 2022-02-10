import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "../../../../src";

@Entity()
export class Post extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    data: number;
}
