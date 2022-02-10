import {Entity, PrimaryGeneratedColumn} from "../../../../src";

@Entity()
export class Author {

    @PrimaryGeneratedColumn("uuid")
    id: string;
}
