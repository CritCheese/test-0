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
    let x5 = localStorage.getItem('editP')
    let xx5
    if (x5 != null) {
        xx5 = parseInt(x5)
    }
    event.preventDefault();
    const axios = require('axios')
    const n1 = event.target.formNameP2.value
    const p1 = event.target.formQuantityP2.value
    const g1 = event.target.formDateP2.value
    const s1 = event.target.formCategoryP2.value
    const res = await fetch("http://localhost:3000/product")
    let x2 = true
    let u9: Product[]
    u9 = await res.json()

    for (let i = 0; i < u9.length; i++) {
        if (u9[i].id == xx5) {
            continue
        }
        if (n1 == u9[i].name) {
            console.log("invalid name")
            x2 = false
            break;
        }
    }
    if (x2 != true){
        alert('name existed!')
    } else {
        axios.patch(`http://localhost:3000/product/${xx5}`, {
        name: n1,
        quantity: p1,
        date: g1,
        category: s1
    })
        .then(function (response: any) {
            console.log(response);
            alert('Success!')
            localStorage.removeItem('editP')
            window.location.reload()
        })
        .catch(function (error: any) {
            console.log(error);
            alert('Failed!')

        })
    }
}