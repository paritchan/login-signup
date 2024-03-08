import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const LoginOrSignUp = () => {
  return (

    <Container>
    {/* <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
    </Spinner> */}
    <Card className='card-main' style={{height:'auto' }}>
        <Row className="align-items-center">
            <Col>
      <h4>React-Bootstrap Form Component</h4> 
      <Form> 
      <Form.Group> 
          <Form.Label>Enter your full name:</Form.Label> 
          <Form.Control type="text" 
                        placeholder="Enter your full name" /> 
        </Form.Group> 
        <Form.Group> 
          <Form.Label>Enter your email address:</Form.Label> 
          <Form.Control type="email" 
                        placeholder="Enter your your email address" /> 
        </Form.Group> 
        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
            <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            />
        <Form.Text id="passwordHelpBlock" muted>
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </Form.Text>
        <Form.Group> 
          <Form.Label>Enter your age:</Form.Label> 
          <Form.Control type="number" placeholder="Enter your age" /> 
        </Form.Group> 
        <Button variant="primary" type="submit"> 
           Click here to submit form 
        </Button> 
      </Form> 
            </Col>
        </Row>
    </Card>
    </Container>
    
  )
}

export default LoginOrSignUp