import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Products() {
  const { data, error, isLoading } = useSWR("/api/products", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // render data
  console.log(data);
  return (
    <ul style={{ listStyleType: "none" }}>
      {data.allProducts.map((product) => (
        <li key={product.id}>{JSON.stringify(product)}</li>
      ))}
    </ul>
  );
}
