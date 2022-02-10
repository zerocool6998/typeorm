import {Column, Entity, ObjectLiteral, PrimaryGeneratedColumn} from "../../../../src/index";

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("hstore", { hstoreType: "object" })
    hstoreObj: ObjectLiteral;

}
