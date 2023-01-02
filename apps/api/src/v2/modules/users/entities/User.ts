import Entity from "../../../entities/entity";
import AppError from "../../../errors/AppError";
import validate from "../utils/validate";

export type AccountRoles = "admin" | "waiter";

interface UserInput {
  _id?: string;
  name: string;
  email: string;
  password?: string;
  passwordHashed?: string;
  role?: AccountRoles;
  createdAt?: string;
  updatedAt?: string;
}

export interface UserEntity {
  _id?: string;
  name: string;
  email: string;
  password: string;
  role: AccountRoles;
  createdAt?: string;
  updatedAt?: string;
}

class User extends Entity<UserEntity> {
  constructor(
    {
      _id,
      email,
      name,
      password,
      passwordHashed,
      role = "waiter",
      createdAt,
      updatedAt,
    }: UserInput,
    alreadySaved = false
  ) {
    if (!alreadySaved) {
      if (!validate.email(email)) {
        throw new AppError("bad_request", "[email] is invalid");
      }

      if (!password || (password && !validate.password(password))) {
        if (password) {
          console.log({ validation: password });
        }
        throw new AppError("bad_request", "[password] is too weak");
      }
    }

    const userPassword = (passwordHashed || password) as string;
    // TODO can be necessary
    // if (isRoleValid(role)) {}

    super({
      _id,
      createdAt,
      email,
      name,
      password: userPassword,
      role,
      updatedAt,
    });
  }

  get email(): string {
    return this.props.email;
  }

  get name(): string {
    return this.props.name;
  }

  get password(): string {
    return this.props.password;
  }

  get role(): AccountRoles {
    return this.props.role;
  }

  set email(email: string) {
    if (!validate.email(email)) {
      throw new AppError("bad_request", "[email] is invalid");
    }

    this.props.email = email;
    this.updateTimestamps();
  }

  set name(name: string) {
    this.props.name = name;
    this.updateTimestamps();
  }

  set password(password: string) {
    if (!validate.password(password)) {
      throw new AppError("bad_request", "[password] is too weak");
    }

    this.updateTimestamps();
  }

  set passwordHashed(passwordHashed: string) {
    this.props.password = passwordHashed;
    this.updateTimestamps();
  }

  set role(role: AccountRoles) {
    this.props.role = role;
    this.updateTimestamps();
  }
}

export default User;
