import { randomUUID } from "../utils/crypto";
import { getUTCTime } from "../utils/datetime";
import { isEmailValid, isPasswordValid } from "../utils/validations";

export type AccountRoles = "admin" | "waiter";

interface UserInput {
  _id?: string | null;
  name: string;
  email: string;
  password: string;
  role?: AccountRoles;
  createdAt?: string;
  updatedAt?: string;
}

export interface UserEntity {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: AccountRoles;
  createdAt: string;
  updatedAt: string;
}

class User {
  private props: UserEntity;

  constructor({
    _id = null,
    email,
    name,
    password,
    role = "waiter",
    createdAt,
    updatedAt
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
      createdAt: createdAt ?? getUTCTime(),
      updatedAt: updatedAt ??getUTCTime(),
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

  get createdAt(): string {
    return this.props.createdAt;
  }

  get updatedAt(): string {
    return this.props.updatedAt;
  }

  set email(email: string) {
    if (!isEmailValid(email)) {
      throw new Error("email is invalid");
    }

    this.props.email = email;
    this.props.updatedAt = getUTCTime();
  }

  set name(name: string) {
    this.props.name = name;
    this.props.updatedAt = getUTCTime();
  }

  set password(password: string) {
    if (!isPasswordValid(password)) {
      throw new Error("password invalid");
    }

    this.props.password = password;
    this.props.updatedAt = getUTCTime();
  }

  set role(role: AccountRoles) {
    this.props.role = role;
    this.props.updatedAt = getUTCTime();
  }
}

export default User;
