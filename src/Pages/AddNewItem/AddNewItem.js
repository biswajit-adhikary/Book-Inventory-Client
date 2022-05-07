import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import './AddNewItem.css';

const AddNewItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/book`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast("Book Added!");
            })
    };
    return (
        <div className='add-new-item-area text-center d-flex justify-content-center align-items-center'>
            <Container>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <div className="add-item-form">
                            <h2 className='theme-text-secondary text-center mb-1'>Add New Book</h2>
                            <span>***All fields are required</span>
                            <form className='d-flex flex-column mt-3' onSubmit={handleSubmit(onSubmit)}>
                                <input className='form-control mt-2' placeholder='Book Name' type="text" {...register("name")} required />
                                <textarea className='form-control mt-2' placeholder='Short Description' {...register("description")} required />
                                <input className='form-control mt-2' placeholder='Price' type="number" {...register("price")} required />
                                <input className='form-control mt-2' placeholder='Quantity' type="number" {...register("quantity")} required />
                                <input className='form-control mt-2' placeholder='Supplier' type="text" {...register("supplier")} required />
                                <input className='form-control mt-2' placeholder='Photo URL' type="text" {...register("image")} required />
                                <input type="submit" className='btn theme-btn mt-3' value="Add Book" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddNewItem;