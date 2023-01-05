export type CommonProps = {
  _id: string;
  createdAt: string;
  updatedAt: string;
};

export type EntityProps = CommonProps;

export type InternalEntityProps<T> = T & CommonProps;

export type EntityInput = Partial<CommonProps>;
