import connection from "../connection";

export default async function getProducts() {
  const result = await connection("labecommerce_products");
  return result;
}
