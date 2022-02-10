import {Entity, OneToMany, PrimaryGeneratedColumn} from "../../../../src/index";
import {Booking} from "./Booking";

@Entity()
export class Contact {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(type => Booking, booking => booking.contact)
    bookings: Booking[];
}
