import {Column, Entity, PrimaryGeneratedColumn} from "../../../../src";

@Entity()
export class Profile {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    gender: string;

    @Column()
    photo: string;

}
