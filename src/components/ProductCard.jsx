import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import "bootstrap/dist/css/bootstrap.min.css";

function ProductCard({ product, onAddToCart, isAdded = false }) {
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  return (
    <Card className="product-card h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.name}
        className="product-card-image object-fit-cover"
      />
      <Card.Body className="d-flex flex-column">
        <div className="d-flex align-items-start justify-content-between gap-2 mb-2">
          <Card.Title className="h5 mb-0">{product.name}</Card.Title>
          <Badge bg="secondary" className="text-nowrap">
            {product.status}
          </Badge>
        </div>
        <Card.Text className="fs-5 fw-semibold mb-3">
          ${product.price.toFixed(2)}
        </Card.Text>
        <Button
          variant={isAdded ? "secondary" : "dark"}
          className="mt-auto"
          type="button"
          onClick={handleAddToCart}
          disabled={isAdded}
        >
          {isAdded ? "✔ Added to Cart" : "Add to Cart"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
