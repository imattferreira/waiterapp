import User from "../../entities/User";

export interface IUsersRepository {
  create(data: User): Promise<void>;
  findById(_id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  update(data: User): Promise<void>;
  listAll(): Promise<User[]>;
  delete(_id: string): Promise<void>;
}
