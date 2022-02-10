import {Column, Entity, PrimaryColumn} from "../../../../src/index";


@Entity()
export class Item {
    @PrimaryColumn()
    itemId: number;

    @Column()
    planId: number;
}
