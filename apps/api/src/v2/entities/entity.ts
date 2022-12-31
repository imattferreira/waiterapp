import crypto from "../modules/users/utils/crypto";
import datetime from "../modules/users/utils/datetime";

type CommonProps = {
  _id: string;
  createdAt: string;
  updatedAt: string;
};

type EntityProps<T> = T & CommonProps;

type EntityInput = Partial<CommonProps>;

class Entity<T extends EntityInput> {
  protected props: EntityProps<T>;

  constructor(props: T) {
    this.props = {
      ...props,
      _id: props._id ?? crypto.randomUUID(),
      createdAt: props.createdAt ?? datetime.getUTCTime(),
      updatedAt: props.updatedAt ?? datetime.getUTCTime(),
    };
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
