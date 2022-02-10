import {Column, PrimaryGeneratedColumn, Tree, TreeChildren, TreeParent} from "../../../../src";
import {Entity} from "../../../../src/decorator/entity/Entity";

@Entity()
@Tree("materialized-path")
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @TreeChildren()
    children: Category[];

    @TreeParent()
    parent: Category;
}
