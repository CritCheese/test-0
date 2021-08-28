import { Container, Table, Form, Button, Modal } from "react-bootstrap";
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useState } from "react";
import AddProduct from "../../../components/AddProduct";
import Moment from 'react-moment';
import EditProduct from "../../../components/EditPRoduct";


export default function DashboardU({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showE, setShowE] = useState(false);
    const handleCloseE = () => setShowE(false);
    const handleShowE = (idx: number) => {
        setShowE(true);
        localStorage.setItem('editP', idx.toString())
    }

    return (
        <Container>
            <p>user dashboard</p>
            <Button variant='primary' size='sm' onClick={handleShow}>Add a product</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton><b>Add a product</b></Modal.Header>
                <Modal.Body>
                    <AddProduct></AddProduct>
                </Modal.Body>
            </Modal>

            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>quantity</th>
                        <th>date</th>
                        <th>category</th>
                        <th>options</th>
                    </tr>

                </thead>
                <tbody>
                    {products.map((r: { id: number; name: string; quantity: string; date: string; category: string }) => {
                        return (
                            <tr key={r.id}>
                                <td>{r.name}</td>
                                <td>{r.quantity}</td>
                                <td><Moment format="DD/MM/YYYY">{r.date}</Moment> </td>
                                <td>{r.category}</td>
                                <td>
                                    <Button variant="outline-secondary" size="sm" onClick={() => handleShowE(r.id)}>
                                        Edit
                                    </Button>
                                    <Button variant="outline-danger" size="sm" onClick={() => delProduct(r.id)}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

            <Modal show={showE} onHide={handleCloseE} backdrop='static'>
                <Modal.Header closeButton><b>Edit Product</b></Modal.Header>
                <Modal.Body>
                    <EditProduct></EditProduct>
                </Modal.Body>
            </Modal>
        </Container>
    )

}

export const getStaticProps: GetStaticProps = async (context) => {
    let products: string[]
    const res = await fetch("http://localhost:3000/product")
    products = await res.json()
    return {
        props: {
            products: JSON.parse(JSON.stringify(products))
        }, revalidate: 1
    }
}

export function delProduct(idx: number) {
    const axios = require('axios')

    axios.delete(`http://localhost:3000/product/${idx}`)
        .then(function (response: any) {
            // handle success
            console.log(response);
            alert('Success!')
            window.location.reload()
        })
        .catch(function (error: any) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}