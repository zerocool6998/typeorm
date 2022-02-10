import {Entity, OneToMany, PrimaryColumn} from "../../../../src";
import {Month} from "./month";

@Entity()
export class Year {

    @PrimaryColumn()
    public yearNo: number;

    @OneToMany(type => Month, month => month.yearNo)
    public month: Month[];

}
