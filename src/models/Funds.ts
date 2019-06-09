import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
//  ManyToOne
} from "typeorm";


@Entity()
export class Funds  {

  @PrimaryGeneratedColumn()
  id = null;

  @Column("varchar")
  required = '';

  @Column("varchar")
  collected = '';

  @Column("datetime")
  launched = '';

  //@ToOne (type => myProjects, proj => proj.sum)
  //sum = myProjects;

}
