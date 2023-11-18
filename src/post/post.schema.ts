import { Field, Int, ObjectType } from '@nestjs/graphql';
import { UserEntity } from 'src/user/user.schema';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, (user) => user.posts)
  @JoinColumn({ name: 'userId' })
  user: UserEntity;

  @Column()
  title: string;

  @Column()
  content: string;
}

// graphQL의 Schema를 생성하기 위해 Type 만들기 진행
@ObjectType()
export class Post {
  // @Field : 클래스의 프로퍼티를 GraphQL 필드로 정의할 떄 사용.
  // 해당 데코레이터를 사용하므로써 해당 프로퍼티가 GraphQL 스키마에 포함되고, 해당 필드를 쿼리 할 수 있게 된다.
  // 프로퍼티의 타입과 다른 메타데이터(설명, 기본값 등)을 GraphQL에 제공한다.
  // (type) => Int의 의미는 Typescript에서 사용되는 함수
  // 해당 필드가 GraphQL 스키마에서 어떤 타입을 갖는지 명시하는 데이터
  // Int : GraphQL의 내장 스칼라 타입 중 하나, 정수를 나타낸다.
  // 정수만 받고, 클라이언트에게 정수만 내보낸다.
  @Field((type) => Int)
  id: number;

  @Field({ description: 'Post를 생성한 UserId' })
  userId: string;

  @Field({ description: '제목' })
  title: string;

  @Field({ nullable: true })
  content?: string;
}
