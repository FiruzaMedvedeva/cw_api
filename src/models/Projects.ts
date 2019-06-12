import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
 // OneToMany,
  JoinTable,
  ManyToMany
} from "typeorm";
import { Categories } from "./Categories";
import { Funds } from "./Funds";
import {User} from "./User";

@Entity()
export class Projects extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  pic: string;

  @Column()
  author: string;

  @Column()
  summ: string;

  @Column()
  description: string;

  @Column()
  video: string;

  @ManyToMany(() => Categories, cat => cat.projects)
  @JoinTable()
  cats: Categories[];

  @OneToMany (type => User, user => user.projects)
  user: Projects[];

  @OneToMany (type => Funds, funds => funds.projects)
  funds: Projects[];
}
