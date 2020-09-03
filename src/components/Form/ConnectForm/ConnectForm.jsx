import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

const ConnectForm = () => (
  <Form className="p-5" form action="https://formspree.io/xlepykgb" method="POST">
    <Form.Group>
      <Row>
        <Col>
          <Form.Control type="text" placeholder="Name" required />
        </Col>
        <Col>
          <Form.Control type="email" name="_replyto" placeholder="Email" required />
        </Col>
      </Row>
    </Form.Group>
    <Form.Group>
      <Row>
        <Col>
          <Form.Control
            as="textarea"
            rows="3"
            placeholder="Connect with Forwardslash Development by message"
            required
          />
        </Col>
      </Row>
    </Form.Group>
    <Form.Group as={Row}>
      <Button className="ml-3 " variant="primary" type="submit">
        Send
      </Button>
    </Form.Group>
  </Form>
);

export default ConnectForm;
