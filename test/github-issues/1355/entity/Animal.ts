import {Column, Entity, PrimaryGeneratedColumn} from "../../../../src/index";
import {Category} from "./Category";
import {JoinTable} from "../../../../src/decorator/relations/JoinTable";
import {JoinColumn} from "../../../../src/decorator/relations/JoinColumn";
import {ManyToMany} from "../../../../src/decorator/relations/ManyToMany";
import {ManyToOne} from "../../../../src/decorator/relations/ManyToOne";
import {Breed} from "./Breed";

@Entity()
export class Animal {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(type => Category, {eager: true})
    @JoinTable({
        joinColumn: {
            name: "categoryId",
            referencedColumnName: "id",
            constraintName: "fk_animal_category_categoryId",
        },
        inverseJoinColumn: {
            name: "animalId",
            referencedColumnName: "id",
            constraintName: "fk_animal_category_animalId",
        },
    })
    categories: Category[];

    @ManyToOne(type => Breed)
    @JoinColumn({
        name: "breedId",
        referencedColumnName: "id",
        constraintName: "fk_animal_breedId",
    })
    breed: Breed;
}