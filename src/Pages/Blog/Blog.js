import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import one from "../../images/one.jpg";
import two from "../../images/two.jpg";
import three from "../../images/three.jpg";
import four from "../../images/four.jpg";
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog-area'>
            <Container>
                <div className="section-heading">
                    <h3 className='theme-text-secondary text-center mb-5'>Our Blogs</h3>
                </div>
                <Row>
                    <Col lg={6}>
                        <div className="single-blog">
                            <img src={one} alt="" />
                            <div className="blog-text p-4">
                                <h3>Difference between javascript and nodejs?</h3>
                                <p>Javascript is a high-level programming language and it's use for writing scripts for website. On the other hand NodeJS is a runtime environment for JavaScript. JavaScript mainly used for front-end development and NodeJS is popular for back-end development. JavaScript's latest version is ECMA script and it run by V8 engine and it's written in C++. NodeJS is run by JavaScript and it written in C, C++ and Javascript. JavaScript is basically run in the Browser using V8 engine and NodeJS can run outside of the browser.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="single-blog">
                            <img src={two} alt="" />
                            <div className="blog-text p-4">
                                <h3>When should you use nodejs and when should you use mongodb?</h3>
                                <p>NodeJS is a runtime environment for JavaScript and MongoDB is a NoSql and document oriented database. In programming language there are two  2 design patterns, one is asynchronous and the other is synchronous. Node follows Asynchronous pattern. For Asynchronous programming we need to use NodeJS. On the other hand MongoDB can handle many access request easily. it design for manage large amount of data easily. So when you need to send many request at a time we need to use mongoDB. </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="single-blog">
                            <img src={three} alt="" />
                            <div className="blog-text p-4">
                                <h3>Differences between sql and NoSql databases?</h3>
                                <p>SQL databases is called Relational Databases and NoSQL database is called distributed database. The schema is predefined or static or fixed in SQL database and the NoSql database the schema is dynamic. SQL database is vertically scalable and NoSql database is horizontally scalable. SQL is not suitable for hierarchical data storage and NoSql is best for hierarchical data storage. In SQL databases data is table-based on the other hand NoSQL databases data is key-value pairs based. SQL is relational databases and NoSQL is databases non-relational databases</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="single-blog">
                            <img src={four} alt="" />
                            <div className="blog-text p-4">
                                <h3>What is the purpose of jwt and how does it work?</h3>
                                <p>JSON Web Token is used for share security information between client and server. It used for Authorization and Information Exchange. JSON Web Tokens have three parts separated by dots and the pares are Header, Payload and Signature. When any user successfully login it create a token and using this token we can manage our data. We can set a time for the token. There is a thing call Bearer and it help us to send information. </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blog;