import React from "react";
import { Form, Button } from "react-bootstrap";
import { Product } from "../pages/users/dashboard/Product";

export default function EditProduct() {
    return (
        <Form onSubmit={editRequest}>
            <Form.Group className="mb-3" controlId="formNameP2">
                <Form.Label >Name: </Form.Label>
                <Form.Control size="sm" type="text" placeholder="enter name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formQuantityP2">
                <Form.Label >Quantity: </Form.Label>
                <Form.Control size="sm" type="number" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDateP2">
                <p style={{ marginBottom: "0px" }}>Date:</p>
                <Form.Control size="sm" type="date" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCategoryP2">
                <p style={{ marginBottom: "0px" }}>Category:</p>
                <Form.Select aria-label="Select gender">
                    <option value="foods">foods</option>
                    <option value="clothes">clothes</option>
                    <option value="electronics">electronics</option>
                    <option value="books">books</option>
                    <option value="appliances">appliances</option>
                </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit" size="sm" >
                Submit
            </Button>
        </Form>
    )
}

export async function editRequest(event:any) {
    
}