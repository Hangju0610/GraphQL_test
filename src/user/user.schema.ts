import { Field, ObjectType } from '@nestjs/graphql';
import { PostEntity } from 'src/post/post.schema';
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
