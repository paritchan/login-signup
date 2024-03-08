import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";



const Home = () => {
    const navigate = useNavigate();
  return (
    <Container>
    <Card className='card-main' style={{height:'auto' }}>
        <Row className="align-items-center">
            <Col>
            <h2>Welcome to Rider App</h2> 
            </Col>
            <h5>Please Click to Login or Sign up as passenger or driver</h5>
            <Col >
            <Button variant="secondary" onClick={() => navigate("/login")}>Login or Sign Up</Button>
            </Col>
            
      </Row>
      </Card>
    </Container>
  )
}

export default Home