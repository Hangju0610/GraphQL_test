import { Query, Resolver } from '@nestjs/graphql';
import { User } from './user.schema';

@Resolver('User')
export class UserResolver {
  constructor() {}

  @Query((returns) => [User])
  async User() {
    return [
      {
        id: 'abcd',
        email: 'aa@a.com',
        password: 'abcde',
      },
    ];
  }
}
