import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Report.css';
import book from "../../../images/book.png";
import supplier from "../../../images/supplier.png";
import delivered from "../../../images/delivered.png";

const Report = () => {
    return (
        <div className='report-area'>
            <Container>
                <Row>
                    <Col lg={4}>
                        <div className="single-report text-white p-5 text-center">
                            <img src={book} alt="" />
                            <h4 className='my-3'>Book Added</h4>
                            <h2>150</h2>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="single-report text-white p-5 text-center">
                            <img src={supplier} alt="" />
                            <h4 className='my-3'>Happy Supplier</h4>
                            <h2>15</h2>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="single-report text-white p-5 text-center">
                            <img src={delivered} alt="" />
                            <h4 className='my-3'>Book Delivered</h4>
                            <h2>72</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Report;