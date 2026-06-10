import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <div className="d-flex flex-column flex-md-row justify-content-between gap-3">
          <div>
            <p className="fw-semibold mb-1">Student Name</p>
            <p className="mb-0">Nguyễn Minh Trường</p>
          </div>
          <div>
            <p className="fw-semibold mb-1">Student ID</p>
            <p className="mb-0">HE204046</p>
          </div>
          <div>
            <p className="fw-semibold mb-1">Class Name</p>
            <p className="mb-0">SE2009NJ</p>
          </div>
          <div>
            <p className="fw-semibold mb-1">Email Address</p>
            <a
              className="link-light text-decoration-none"
              href="mailto:truongtkls8@gmail.com"
            >
              truongtkls8@gmail.com
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
