import Role from "../schemas/roleSchemas.mjs";

const roleNames = ["Administrator", "User", "Author"];

const createRoles = async () => {
  roleNames.forEach(async (rolename) => {
    const createRole = new Role({
      rolename,
    });
    await createRole.save();
  });
};
export default createRoles;
