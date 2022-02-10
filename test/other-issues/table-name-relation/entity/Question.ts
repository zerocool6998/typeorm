import {Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "../../../../src";
import {Column} from "../../../../src/decorator/columns/Column";
import {Category} from "./Category";

@Entity("questions")
export class Question {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany("categories")
    @JoinTable()
    categories: Category[];

}
