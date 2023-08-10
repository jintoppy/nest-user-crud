import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class UserEntity {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field({ nullable: true })
  username: string;

  @Column()
  @Field({ nullable: true })
  password: string;

  @Column()
  @Field({ nullable: true })
  name: string;
}
