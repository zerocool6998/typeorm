import {Column, Entity, PrimaryGeneratedColumn} from "../../../../src";

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({
        type: "json"
    })
    meta: any;

}
