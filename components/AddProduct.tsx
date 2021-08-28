import { Form, Button, InputGroup } from "react-bootstrap";
import axios from "axios";
import { getStaticProps } from "../pages/api/users";
import { Product } from "../pages/users/dashboard/Product";

export default function AddProduct() {

    return (
        <Form onSubmit={addRequestP}>
            <Form.Group className="mb-3" controlId="formNameA2">
                <Form.Label >Name: </Form.Label>
                <Form.Control size="sm" type="text" placeholder="enter name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formQuantityA2">
                <Form.Label >Quantity: </Form.Label>
                <Form.Control size="sm" type="number" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDateA2">
                <p style={{ marginBottom: "0px" }}>Date:</p>
                <Form.Control size="sm" type="date" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCategoryA2">
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

export async function addRequestP(event: any) {
    event.preventDefault();
    const axios = require('axios')
    const n2 = event.target.formNameA2.value
    const q2 = event.target.formQuantityA2.value
    const d2 = event.target.formDateA2.value
    const c2 = event.target.formCategoryA2.value
    const res = await fetch("http://localhost:3000/product")
    let x3 = true
    let p9: Product[]
    p9 = await res.json()

    for (let px of p9) {
        if (n2 == px.name) {
            x3 = false
            console.log("invalid name")
            break;
        }
    }

    if (x3 != true) {
        alert('product name existed!')
    } else {
        axios.post('http://localhost:3000/product', {
            name: n2,
            quantity: q2,
            date: d2,
            category: c2
        })
            .then(function (response: any) {
                console.log(response);
                alert('Success!')
                window.location.reload()

            })
            .catch(function (error: any) {
                console.log(error);
                alert('Failed!')

            })
    }



}