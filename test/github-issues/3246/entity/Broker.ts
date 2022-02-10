import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "../../../../src";
import {Order} from "./Order";

@Entity()
export class Broker {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", nullable: true })
  name: string;

  @OneToMany(
    (type) => Order,
    (order) => order.company,
    {
      cascade: ["insert", "update"],
      onDelete: "CASCADE",
      nullable: true,
    }
  )
  orders?: Order;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  modifiedDate: Date;
}
