import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany
} from "typeorm";
import { Projects } from "./Projects";

@Entity()
export class Categories extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    slug: string;

    @ManyToMany(() => Projects, project => project.cats)
    projects: Projects[];
}
