import {Column, Entity, PrimaryColumn} from "../../../../src";

@Entity()
export class User {
    @PrimaryColumn({
        comment: "The ID of this user.",
        length: 16,
        type: "binary",
    })
    id: Buffer;

    @Column()
    name: string;
}
