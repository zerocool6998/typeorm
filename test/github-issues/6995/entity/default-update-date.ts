import {CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from '../../../../src';

@Entity()
export class DefaultUpdateDate {

	@PrimaryGeneratedColumn({
		type: "int"
	})
	public id: number;

	@CreateDateColumn()
	public createdDate: Date;

	@UpdateDateColumn()
	public updatedDate: Date;
}
