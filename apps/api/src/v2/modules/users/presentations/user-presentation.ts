import User from "../entities/User";

function userPresentation({ _id, email, name, password, role }: User) {
  return {
    id: _id,
    email,
    name,
    password,
    role,
  };
}

export default userPresentation;
