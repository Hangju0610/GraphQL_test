import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { User } from './user.schema';
import { Post, PostEntity } from 'src/post/post.schema';

@Resolver((of) => User)
export class UserResolver {
  constructor() {}

  @Query((returns) => [User])
  async allUser() {
    return [
      {
        id: 'abcd',
        email: 'aa@a.com',
        password: 'abcde',
      },
      {
        id: 'cccd',
        email: 'cc@a.com',
        password: 'abcde',
      },
    ];
  }

  @Query((returns) => User)
  async User(@Args('id') id: string) {
    const userList = [
      {
        id: 'abcd',
        email: 'aa@a.com',
        password: 'abcde',
      },
      {
        id: 'cccd',
        email: 'cc@a.com',
        password: 'abcde',
      },
    ];
    const user = userList.filter((v) => {
      return v.id == id;
    });
    return user[0];
  }

  @ResolveField((returns) => [Post])
  async posts(@Parent() user: User) {
    const { id } = user;
    const post = [
      {
        id: 1,
        userId: 'abcd',
        title: 'hello graphQL',
        content: 'nice to meet you',
      },
      {
        id: 2,
        userId: 'cccd',
        title: 'WTF',
        content: 'WTF',
      },
      {
        id: 3,
        userId: 'abcd',
        title: 'hello graphQL',
        content: 'nice to meet you',
      },
    ];
    const a = post.filter((v) => {
      return v.userId == id;
    });
    return a;
  }
}
