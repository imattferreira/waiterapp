import crypto from "../modules/users/utils/crypto";
import datetime from "../modules/users/utils/datetime";
import type { EntityInput, InternalEntityProps } from "./interfaces";

class Entity<T> {
  protected props: InternalEntityProps<T>;

  constructor(props: Omit<T, "_id" | "createdAt" | "updatedAt"> & EntityInput) {
    this.props = {
      _id: crypto.randomUUID(),
      createdAt: datetime.getUTCTime(),
      updatedAt: datetime.getUTCTime(),
      ...props,
    } as InternalEntityProps<T>;
  }

  get _id(): string {
    return this.props._id;
  }

  get createdAt(): string {
    return this.props.createdAt;
  }

  get updatedAt(): string {
    return this.props.updatedAt;
  }

  protected updateTimestamps() {
    this.props.updatedAt = datetime.getUTCTime();
  }
}

export default Entity;
