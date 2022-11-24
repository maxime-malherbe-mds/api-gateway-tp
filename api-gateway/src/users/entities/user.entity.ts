
type UserProperties = Required<User>;
export enum State {
  ACTIVE = 'ACTIVE',
  DEACTIVATED = 'DEACTIVATED',
}


export class User {

  public id?: number;

  public login?: string;

  public email?: string;

  public firstName?: string;

  public lastName?: string;

  public password?: string;

  public state: State = State.ACTIVE;
  public createdAt: Date = new Date();
  public updatedAt: Date = new Date();

  public static fromProperties(value: UserProperties): User {
    const user = new User();
    user.id = value.id;
    user.login = value.login;
    user.email = value.email;
    user.firstName = value.firstName;
    user.lastName = value.lastName;
    user.state = value.state;
    user.createdAt = value.createdAt;
    user.updatedAt = value.updatedAt;
    return user;
  }
}
