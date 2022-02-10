import {CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "../../../../src";

@Entity()
export class User {

    @PrimaryColumn()
    id: number;

    @CreateDateColumn()
    created_at: number;

    @UpdateDateColumn()
    updated_at: string;

}
