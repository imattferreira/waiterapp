import { model, Schema } from "mongoose";
import type { UserEntity } from "../entities/User";
import User from "../entities/User";
import type { IUsersRepository } from "./interfaces";

const Repository = model(
  "User",
  new Schema<UserEntity>({
    _id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "waiter"],
      default: "waiter",
    },
    createdAt: {
      type: String,
      required: true,
    },
    updatedAt: {
      type: String,
      required: true,
    },
  })
);

class UsersRepository implements IUsersRepository {
  async create({
    _id,
    email,
    name,
    password,
    role,
    createdAt,
    updatedAt,
  }: User): Promise<void> {
    await Repository.create({
      _id,
      email,
      name,
      password,
      role,
      createdAt,
      updatedAt,
    });
  }

  async findById(_id: string): Promise<User | null> {
    const data = await Repository.findById(_id).lean();

    if (!data) {
      return null;
    }

    return new User({ ...data }, true);
  }

  async findByEmail(email: string): Promise<User | null> {
    const data = await Repository.findOne({ email }).lean();

    if (!data) {
      return null;
    }

    return new User({ ...data }, true);
  }

  async update(data: User): Promise<void> {
    await Repository.findByIdAndUpdate(data._id, data);
  }

  async listAll(): Promise<User[]> {
    const data = await Repository.find().lean();

    return data.map((user) => new User({ ...user }, true));
  }

  async delete(_id: string): Promise<void> {
    await Repository.findOneAndDelete({ _id });
  }
}

export default UsersRepository;
