import 'bootstrap/dist/css/bootstrap.min.css';
import "./contact.css";
import { Container, Row, ListGroup, Col, Button, Form } from 'react-bootstrap';
import User from "./User.jpg";
import Card from "./Card.png";
import Mail from "./Mail.png";
function Contact() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={3} sm={12} md={12} className="bg-Settings">
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
          <Col lg={9} sm={12}  md={12} className="bg-setting-color d-flex justify-content-cente">
            <div className='display-center'>   
                <div  className="sp target" >
                <h3 className='text-primary setting-font'>Contact us</h3>
                <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Add title</Form.Label>
        <Form.Control  className='paddinginnerr d-grid gap-2'  type="email" placeholder="e.g. Add new fonts"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicmessage">
        <Form.Label>Write a message </Form.Label>
        <Form.Control className='paddingtypehere d-grid gap-2'  type="message" placeholder="Type here..." />
      </Form.Group>
      <Row>
        <Col lg={4} sm={12}>
      <Button variant="light" type="submit" className='contactcancel'>
        Submit
      </Button>
      </Col>
      <Col lg={7} sm={12}>
      <div className="d-grid gap-2 ">
      <Button variant="primary" size="lg" className='send'>
      <div className='text-cenpoter'> Send</div>
      </Button>
    </div>
    </Col>
    </Row>
    </Form>
                </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
