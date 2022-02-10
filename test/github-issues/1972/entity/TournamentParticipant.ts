import {Entity, PrimaryGeneratedColumn, TableInheritance} from "../../../../src/index";

@Entity()
@TableInheritance({
    pattern: "STI",
    column: {
        name: "type",
        type: "varchar",
    },
})
export abstract class TournamentParticipant {
    @PrimaryGeneratedColumn()
    public id: number;
}
