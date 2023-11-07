import 'bootstrap/dist/css/bootstrap.min.css';
import './Settings.css';
import { Container, Row, ListGroup, Col, Button, Form } from 'react-bootstrap';
import Ellipse from "./Ellipse.png";
import Group from "./Group.jpg";
import User from "./User.jpg";
import Card from "./Card.png";
import Mail from "./Mail.png";
function Settings() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={3} className="bg-Settings">
            <h3 className='text-primary padding-top-left setting-font'>Settings</h3>
            <div>
              <ListGroup>
                <ListGroup.Item action href="#link1" className='myprofilepadding-top-left font'>
                  <span><img src={User} alt="one" className='float-start margin-end'></img></span> My profile
                </ListGroup.Item>
                <ListGroup.Item action href="#link2" className='myprofilepadding-top-left font-def'>
                  <span><img src={Card} alt="one" className='float-start margin-end'></img></span>
                  Billing history
                </ListGroup.Item>
                <ListGroup.Item action href="#link2" className='myprofilepadding-top-left font-def'>
                  <span><img src={Mail} alt="one" className='float-start margin-end'></img></span>
                  Contact us
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
          <Col lg={9} className="bg-setting-color">
            <div className='d-flex justify-content-center'>
              <Row>
                <Col lg={3} className="sp" >
                  <div className='tempor d-grid gap-2'>
                    <img src={Ellipse} alt='f-img' className='border-radius size'></img>
                    <h5 className='text-primary'>Upload image</h5>
                  </div>
                </Col>
                <Col lg={9} className="padding-top-left">
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="name" className='confoam' placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" className='confoam' placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" className='confoam' placeholder="Password" />
                    </Form.Group>
                    <div className='line'>
                      <h4 className='line'>Connect with</h4>
                    </div>
                    <div className="d-grid gap-2">
                      <Button variant="light" size="lg" className='border'>
                        <span><img src={Group} alt="google" className='googlepadding' ></img></span> Google
                      </Button>
                    </div>
                    <div className='mt-4'></div>
                    <div className="d-grid gap-2">
                      <Button variant="primary" size="lg" className='paddingsave'>
                        Save
                      </Button></div>
                  </Form>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Settings;
