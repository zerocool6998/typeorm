import {Column, Entity, PrimaryColumn} from "../../../../src/index";


@Entity()
export class Plan {
    @PrimaryColumn()
    planId: number;

    @Column()
    planName: string;
}
