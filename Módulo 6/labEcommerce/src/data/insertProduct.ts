import connection from "../connection";

export default async function insertProduct(
  id: string,
  name: number,
  price: string,
  image_url: string
) {
  await connection
    .insert({
      id,
      name,
      price,
      image_url,
    })
    .into("labecommerce_products");
}
