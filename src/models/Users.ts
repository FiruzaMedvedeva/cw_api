import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  //ManyToOne
} from "typeorm";

@Entity()
export class User  {

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

  //@OneToMany (type => ContentBox)
  //u = conbox;
}
