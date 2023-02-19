import Entity from "@/entities/entity";
import type { EntityInput, EntityProps } from "@/entities/interfaces";
import AppError from "@/errors/app-error";
import { isObj } from "@/utils/object";
import validate from "@/utils/validate";

export type AccountRoles = "admin" | "waiter";

interface UserInput extends EntityInput {
  name: string;
  email: string;
  password: string | { plaintext: string; hash: string };
  role?: AccountRoles;
}

export interface UserEntity extends EntityProps {
  name: string;
  email: string;
  password: string;
  role: AccountRoles;
}

class User extends Entity<UserEntity> {
  constructor({
    _id,
    email,
    name,
    password,
    role = "waiter",
    createdAt,
    updatedAt,
  }: UserInput) {
    let userPassword = null;

    //* when the password is a object, theoretically is a new register
    if (isObj(password)) {
      const { plaintext, hash } = password;

      if (!validate.password(plaintext)) {
        throw new AppError("bad_request", "[password] is too weak");
      }

      userPassword = hash;

      if (!validate.email(email)) {
        throw new AppError("bad_request", "[email] is invalid");
      }

      if (role !== "admin" && role !== "waiter") {
        throw new AppError("bad_request", "[role] is invalid");
      }
    } else {
      userPassword = password;
    }

    super({
      _id,
      email,
      name,
      password: userPassword,
      role,
      createdAt,
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

  set password(password: string | { hash: string; plaintext: string }) {
    if (isObj(password)) {
      if (!validate.password(password.plaintext)) {
        throw new AppError("bad_request", "[password] is too weak");
      }

      this.props.password = password.hash;
    } else {
      this.props.password = password;
    }

    this.updateTimestamps();
  }

  set role(role: AccountRoles) {
    if (role !== "admin" && role !== "waiter") {
      throw new AppError("bad_request", "[role] is invalid");
    }

    this.props.role = role;
    this.updateTimestamps();
  }
}

export default User;
