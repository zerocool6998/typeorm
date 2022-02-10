import {Entity, ManyToOne, PrimaryGeneratedColumn} from "../../../../../src/index";
import {User} from "./User";

@Entity()
export class Account {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => User)
    user: User;
}
