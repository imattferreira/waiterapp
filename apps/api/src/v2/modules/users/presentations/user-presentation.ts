import User from "../entities/User";

function userPresentation({
  _id,
  email,
  name,
  password,
  role,
  createdAt,
  updatedAt,
}: User) {
  return {
    id: _id,
    email,
    name,
    password,
    role,
    createdAt,
    updatedAt,
  };
}

export default userPresentation;
