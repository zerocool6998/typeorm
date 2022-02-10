import {Column, Entity, ObjectID, ObjectIdColumn} from "../../../../src";

@Entity("warnings")
export class Warn {
    @ObjectIdColumn()
    id!: ObjectID

    @Column()
    guild!: string;

    @Column()
    user!: string;

    @Column()
    moderator!: string;

    @Column()
    reason!: string;

    @Column()
    createdAt!: Date;
}
