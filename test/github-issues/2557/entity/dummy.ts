import {Column} from "../../../../src/decorator/columns/Column";
import {PrimaryGeneratedColumn} from "../../../../src/decorator/columns/PrimaryGeneratedColumn";
import {Entity} from "../../../../src/decorator/entity/Entity";
import {transformer, WrappedNumber} from "../transformer";

@Entity()
export class Dummy {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("int", {transformer})
    num: WrappedNumber;
}
