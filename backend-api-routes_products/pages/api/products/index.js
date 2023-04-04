import { getAllProducts } from "../../../services/productServices";

export default function handler(request, response) {
  const allProducts = getAllProducts();
  response.status(200).json({ allProducts });
}
