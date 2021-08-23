import { Container, Row, Col } from 'react-bootstrap';

const App = () => {
  return (
    <Container>
      <Row>
        <Col md={12} centered>
          <h1>hello world</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default App;