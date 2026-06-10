import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "./ProductCard";
import products from "../data/product";

function ProductList({ addedProducts, onAddToCart }) {
  return (
    <section className="py-5 bg-light">
      <Container>
        <div className="mb-4 text-center">
          <h2 className="fw-bold mb-2">Featured Products</h2>
          <p className="text-secondary mb-0">
            Explore the latest fashion picks from Shop Fashion.
          </p>
        </div>
        <Row className="g-4">
          {products.map((product) => (
            <Col key={product.name} xs={12} md={6} lg={4}>
              <ProductCard
                product={product}
                onAddToCart={onAddToCart}
                isAdded={addedProducts.includes(product.name)}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default ProductList;
