import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from "typeorm";
import {Projects} from "./Projects";

@Entity()
export class User  extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  logo: string;

  @Column()
  fullname: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  about: string;

  @ManyToOne( type => Projects, projects => projects.user)
  user: Projects;
}
