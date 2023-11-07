import 'bootstrap/dist/css/bootstrap.min.css';
import './billing.css';
import { Container, Row, ListGroup, Col } from 'react-bootstrap';

import User from "./User.jpg";
import Card from "./Card.png";
import Mail from "./Mail.png";
function Billing() {
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
                            <div className="sp">
                                <h3 className='text-primary setting-font'>Billing History</h3>
                                <div className='mt-5'></div>
                                <Row>
                                    <Col lg={3}>
                                        <h6 className='standar-paper '>22 Aug 2022</h6>
                                        <h6 className='standar-paper '>08:56</h6>
                                    </Col>
                                    <Col lg={8}>
                                        <h6 className='MyProjectname'>My Project name - 9</h6>
                                        <h6 className='standar-paper '>50 flyers</h6>
                                        <h6 className=' standar-paper '>Standart paper · Mate finish · No envelope</h6>
                                    </Col>
                                    <Col lg={1}>
                                        <h6 className='MyProjectname'>$50.00</h6>
                                    </Col>
                                </Row>
                                <div className='mt-4'></div>
                                <Row>
                                    <Col lg={3}>
                                        <h6 className='standar-paper '>14 Aug 2022</h6>
                                        <h6 className='standar-paper '>07:06</h6>
                                    </Col>
                                    <Col lg={8}>
                                        <h6 className='MyProjectname'>Cafe & Jeans</h6>
                                        <h6 className='standar-paper '>100 flyers</h6>
                                        <h6 className=' standar-paper '>Standart paper · Mate finish · No envelope</h6>
                                    </Col>
                                    <Col lg={1}>
                                        <h6 className='MyProjectname'>$510.00</h6>
                                    </Col>
                                </Row>
                                <div className='mt-4'></div>
                                <Row>
                                    <Col lg={3}>
                                        <h6 className='standar-paper '>28 Aug 2022</h6>
                                        <h6 className='standar-paper '>08:46</h6>
                                    </Col>
                                    <Col lg={8}>
                                        <h6 className='MyProjectname'>My Project name - 9</h6>
                                        <h6 className='standar-paper '>50 flyers</h6>
                                        <h6 className=' standar-paper '>Standart paper · Mate finish · No envelope</h6>
                                    </Col>
                                    <Col lg={1}>
                                        <h6 className='MyProjectname'>150.00</h6>
                                    </Col>
                                </Row>
                                <div className='mt-4'></div>
                                <Row>
                                    <Col lg={3}>
                                        <h6 className='standar-paper '>22 Aug 2022</h6>
                                        <h6 className='standar-paper '>08:56</h6>
                                    </Col>
                                    <Col lg={8}>
                                        <h6 className='MyProjectname'>My Project name - 9</h6>
                                        <h6 className='standar-paper '>50 flyers</h6>
                                        <h6 className=' standar-paper '>Standart paper · Mate finish · No envelope</h6>
                                    </Col>
                                    <Col lg={1}>
                                        <h6 className='MyProjectname'>$50.00</h6>
                                    </Col>
                                </Row>
                                <div className='mt-4'></div>
                                <Row>
                                    <Col lg={3}>
                                        <h6 className='standar-paper '>22 Aug 2022</h6>
                                        <h6 className='standar-paper '>08:56</h6>
                                    </Col>
                                    <Col lg={8}>
                                        <h6 className='MyProjectname'>My Project name - 9</h6>
                                        <h6 className='standar-paper '>50 flyers</h6>
                                        <h6 className=' standar-paper '>Standart paper · Mate finish · No envelope</h6>
                                    </Col>
                                    <Col lg={1}>
                                        <h6 className='MyProjectname'>$50.00</h6>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Billing;