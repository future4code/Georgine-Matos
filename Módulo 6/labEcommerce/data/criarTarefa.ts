import connection from "../src/connection";

export default async function criarTarefa(
  id: string,
  user_id: string,
  product_id: string,
  quantity: string,
  total_price: Number
) {
    await connection("labecommerce_purchases").insert({
        id,
        user_id,
        product_id,
        quantity,
        total_price: Number
    })
}
