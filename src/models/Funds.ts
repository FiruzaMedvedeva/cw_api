import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne
} from "typeorm";
import Projects from "./Projects"


@Entity()
export class Funds extends BaseEntity {

  @PrimaryGeneratedColumn()
  id:number;

  @Column();
  required: string;

  @Column();
  collected: string;

  @Column()
  launched: string;

  @ManyToOne(() => Projects,  projects => projects.funds)
  projects: Projects;

}
