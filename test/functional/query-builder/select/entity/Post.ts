import {
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
    VersionColumn,
} from "../../../../../src";
import {Tag} from "./Tag";
import {Category} from "./Category";
import {HeroImage} from "./HeroImage";

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    rating: number;

    @VersionColumn()
    version: string;

    @OneToOne(() => HeroImage, (hero) => hero.post)
    @JoinColumn()
    heroImage: HeroImage;

    @ManyToOne(type => Category)
    category: Category;

    @ManyToMany(() => Tag, (tag) => tag.posts)
    @JoinTable()
    tags: Tag[]

}
