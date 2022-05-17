import connection from "../connection";

export default async function firstConnection() {
  await connection("labecommerce_users");
}
