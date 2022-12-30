import User from "../entities/User";

export interface IUserPresentation {
  id: string;
  email: string;
  name: string;
  role: string;
  created_at: string;
  updated_at: string;
}

function userPresentation({
  _id,
  email,
  name,
  role,
  createdAt,
  updatedAt,
}: User): IUserPresentation {
  return {
    id: _id,
    email,
    name,
    role,
    created_at: createdAt,
    updated_at: updatedAt,
  };
}

export default userPresentation;
