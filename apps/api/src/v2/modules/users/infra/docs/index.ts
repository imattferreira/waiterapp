import createUser from "./create-user";
import authenticate from "./authenticate";
import deleteUser from "./delete-user";
import listUser from "./list-user";
import listUsers from "./delete-user";
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
