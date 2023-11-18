import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Post } from './post.schema';
import { User } from 'src/user/user.schema';

@Resolver('Post')
export class PostResolver {
  constructor() {}

  @Query((returns) => [Post])
  async Post() {
    return [
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
  }
}
