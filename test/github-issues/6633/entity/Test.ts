import {Column, Entity, Index, PrimaryColumn} from "../../../../src";

@Entity()
export class Test {
    @PrimaryColumn()
    id: number;

    @Index("description_index", { fulltext: true })
    @Column()
    description: string;
}
