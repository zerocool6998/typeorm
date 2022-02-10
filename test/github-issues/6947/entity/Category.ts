import {Column, Entity, PrimaryGeneratedColumn, Tree, TreeChildren, TreeParent} from "../../../../src";

@Entity()
@Tree("closure-table")
export class Category {
    @PrimaryGeneratedColumn()
    cat_id: number;

    @Column()
    cat_name: string;

    @TreeParent()
    parent: Category;

    @TreeChildren({ cascade: true })
    children: Category[];
}
