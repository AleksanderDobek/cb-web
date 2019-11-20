import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button, Card, CardBody, CardHeader, Row, Col } from 'reactstrap';
import Chance from 'chance';
import UserSkills from '../../plantastic/src/components/user/skill/UserSkills';

const chance = new Chance();

const randomParagraph = () => {
  return (<p>{chance.paragraph()}</p>)
};

function App() {
  return (
    <div className="container">
      <Row>
        <Col xs={12} md={6} lg={3}>
          <UserSkills />

        </Col>
        <Col xs={12} md={6} lg={3}>

        </Col>
      </Row>


    </div>
  );
}

export default App; 
