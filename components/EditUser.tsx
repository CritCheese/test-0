import React from "react";
import { Form, Button } from "react-bootstrap";
import { User } from "../pages/users/User";

export default function EditUser() {
    return (
        <Form onSubmit={editRequest}>
            <Form.Group className="mb-3" controlId="formNameE2">
                <Form.Label >Name: </Form.Label>
                <Form.Control size="sm" type="text" placeholder="enter name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPasswordE2">
                <Form.Label >Password: </Form.Label>
                <Form.Control size="sm" type="password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGenderE2">
                <p style={{ marginBottom: "0px" }}>Gender:</p>
                <Form.Select aria-label="Select gender" >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formStatusE2">
                <p style={{ marginBottom: "0px" }}>Status:</p>
                <Form.Select aria-label="Select status" >
                    <option value="active">active</option>
                    <option value="disabled">disabled</option>
                </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit" size="sm" >
                Submit
            </Button>
        </Form>
    )
}

export async function editRequest(event: any) {
    let x5 = localStorage.getItem('editU')
    let xx5
    if (x5 != null) {
        xx5 = parseInt(x5)
    }
    event.preventDefault();
    const axios = require('axios')
    const n1 = event.target.formNameE2.value
    const p1 = event.target.formPasswordE2.value
    const g1 = event.target.formGenderE2.value
    const s1 = event.target.formStatusE2.value
    const res = await fetch("http://localhost:3000/user")
    let x2 = true
    let u9: User[]
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
        axios.patch(`http://localhost:3000/user/${xx5}`, {
        name: n1,
        password: p1,
        gender: g1,
        status: s1
    })
        .then(function (response: any) {
            console.log(response);
            alert('Success!')
            localStorage.removeItem('editU')
            window.location.reload()
        })
        .catch(function (error: any) {
            console.log(error);
            alert('Failed!')

        })
    }
}