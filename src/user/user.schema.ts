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

  // Array로 받고 싶은 경우, type을 해당 클래스로 입력한다.
  // 배열의 nullable : 해당 필드 또는 필드의 항목들이 null을 가질 수 있는지
  // item : 배열 내의 개별 항목들이 null일 수 있다.
  // true : 필드 자체가 null일 수 있다.
  // itemsAndList : 필드 자체와 배열 내의 항목이 모두 null이 될 수 있다.
  @Field((type) => [Post], { nullable: 'items' })
  posts?: Post[];
}
