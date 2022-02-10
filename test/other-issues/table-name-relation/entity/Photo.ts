import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "../../../../src";
import {User} from "./User";

@Entity("photographs")
export class Photo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @ManyToOne("users", "photos")
    user: User;

}
