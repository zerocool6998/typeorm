import {Column, Entity, PrimaryGeneratedColumn} from "../../../../src";

@Entity()
export class User {
    @PrimaryGeneratedColumn({ type: "integer" })
    id: number;

    @Column()
    name: string;
}
