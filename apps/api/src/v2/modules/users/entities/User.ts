import { randomUUID } from "../utils/crypto";
import { isEmailValid, isPasswordValid } from "../utils/validations";

export type AccountRoles = "admin" | "waiter";

interface UserInput {
  _id?: string | null;
  name: string;
  email: string;
  password: string;
  role?: AccountRoles;
}

export interface UserEntity {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: AccountRoles;
}

class User {
  private props: UserEntity;

  constructor({
    _id = null,
    email,
    name,
    password,
    role = "waiter",
  }: UserInput) {
    if (!isEmailValid(email)) {
      throw new Error("email is invalid");
    }

    if (!isPasswordValid(password)) {
      throw new Error("password is invalid");
    }

    // TODO can be necessary
    // if (isRoleValid(role)) {}

    this.props = {
      email,
      name,
      password,
      _id: _id ?? randomUUID(),
      role,
    };
  }

  get _id(): string {
    return this.props._id;
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
    if (!isEmailValid(email)) {
      throw new Error("email is invalid");
    }

    this.props.email = email;
  }

  set name(name: string) {
    this.props.name = name;
  }

  set password(password: string) {
    if (!isPasswordValid(password)) {
      throw new Error("password invalid");
    }

    this.props.password = password;
  }

  set role(role: AccountRoles) {
    this.props.role = role;
  }
}

export default User;
