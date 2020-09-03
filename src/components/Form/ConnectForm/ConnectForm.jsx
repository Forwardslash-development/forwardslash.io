import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

const ConnectForm = () => (
  <div className="container rounded-lg bg-blue-500 mb-3 pt-4">
    <h1 className="text-center text-white pb-2">Connect with Us</h1>
    <Form className="" form action="https://formspree.io/xlepykgb" method="POST">
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
      <Form.Group as={Row} className="float-right mr-1">
        <Button className="ml-3" variant="primary" type="submit">
          Send
        </Button>
      </Form.Group>
    </Form>
  </div>
);

export default ConnectForm;
