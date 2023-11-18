import { Field, ObjectType, Query } from '@nestjs/graphql';
import { Post, PostEntity } from 'src/post/post.schema';
import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryColumn({ type: 'uuid' })
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToOne(() => PostEntity, (post) => post.user)
  posts: PostEntity[];
}

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field({ nullable: true })
  email?: string;

  @Field(() => [Post], { nullable: 'items' })
  posts?: Post[];
}
