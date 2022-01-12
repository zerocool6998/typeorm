import {Entity, PrimaryGeneratedColumn} from "../../../../src/index";

@Entity()
export class Breed {

    @PrimaryGeneratedColumn()
    id: number;

}