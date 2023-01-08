import authenticate from "./authenticate";
import createUser from "./create-user";
import deleteUser from "./delete-user";
import listUser from "./list-user";
import listUsers from "./list-users";
import updateUser from "./update-user";

const docs = {
  authenticate,
  createUser,
  deleteUser,
  listUser,
  listUsers,
  updateUser,
};

export default docs;
