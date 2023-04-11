//import { products } from "../../../lib/products";
import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;

  //const product = Product.find((product) => product._id === id);

  if (request.method === "GET") {
    //const details = await Product.findById(id);
    const details = await Product.findById(id).populate("reviews");
    if (!details) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(details);
  }
}
