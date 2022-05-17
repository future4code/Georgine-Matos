import connection from "../connection";

export default async function getUsers() {
  const result = await connection("labecommerce_users");
  return result;
}
