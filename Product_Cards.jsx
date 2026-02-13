import "./Product_Cards.css";

function Product_Cards() {
  const products = [
    { id: 1, name: "Wireless Headphones", price: 129.99, inStock: true },
    { id: 2, name: "Mechanical Keyboard", price: 89.99, inStock: false },
    { id: 3, name: "Smart Watch", price: 199.99, inStock: true },
  ];

  return (
    <div className="container">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <div className="image-placeholder" />

          <h2>{product.name}</h2>
          <p className="price">${product.price.toFixed(2)}</p>

          <span className={`badge ${product.inStock ? "in" : "out"}`}>
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Product_Cards;

