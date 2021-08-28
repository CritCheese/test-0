import { Form, Button } from "react-bootstrap";
import { User } from "../pages/users/User";

export async function addRequest(event: any) {

    event.preventDefault();
    const axios = require('axios')
    const n1 = event.target.formName.value
    const p1 = event.target.formPassword.value
    const g1 = event.target.formGender.value
    const s1 = event.target.formStatus.value
    const res = await fetch("http://localhost:3000/user")
    let x2 = true
    let u9: User[]
    u9 = await res.json()

    for (let xx of u9){
        if (n1 == xx.name){
            x2 = false
            console.log("invalid name")
            break;
        }
    }

    if (x2 != true){
        alert('name existed!')
    } else {
        axios.post('http://localhost:3000/user', {
        name: n1,
        password: p1,
        gender: g1,
        status: s1
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

export default function AddUser() {

    return (
        <Form onSubmit={addRequest}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label >Name: </Form.Label>
                <Form.Control size="sm" type="text" placeholder="enter name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label >Password: </Form.Label>
                <Form.Control size="sm" type="password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGender">
                <p style={{ marginBottom: "0px" }}>Gender:</p>
                <Form.Select aria-label="Select gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formStatus">
                <p style={{ marginBottom: "0px" }}>Status:</p>
                <Form.Select aria-label="Select gender">
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

