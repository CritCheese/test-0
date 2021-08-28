import styles from '../../../components/test_css_1.module.css'
import { Container, Table, Button, Modal, Form } from 'react-bootstrap'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import axios from 'axios'
import AddUser from '../../../components/AddUser'
import { useState } from 'react'
import EditUser from '../../../components/EditUser'


export function delUser(idx: number) {
    const axios = require('axios')

    axios.delete(`http://localhost:3000/user/${idx}`)
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

export default function DashboardA({ users }: InferGetStaticPropsType<typeof getStaticProps>) {
    // console.log(users)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showE, setShowE] = useState(false);
    const handleCloseE = () => setShowE(false);
    const handleShowE = (idx:number) => {
        setShowE(true);
        localStorage.setItem('editU', idx.toString())
    }

    return (
        <Container className={styles.container}>
            <p>admin dashboard</p>
            <Button variant="primary" size="sm" onClick={handleShow}>Add an User</Button>
            <Modal show={show} onHide={handleClose} backdrop='static'>
                <Modal.Header closeButton><b>Add an user</b></Modal.Header>
                <Modal.Body>
                    <AddUser></AddUser>
                </Modal.Body>
            </Modal>


            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>password</th>
                        <th>gender</th>
                        <th>status</th>
                        <th>options</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((r: { id: number; name: string; password: string; gender: string; status: string }) => {
                        return (
                            <tr key={r.id}>
                                <td>{r.name}</td>
                                <td>{r.password}</td>
                                <td>{r.gender}</td>
                                <td>{r.status}</td>
                                <td>
                                    <Button variant="outline-secondary" size="sm" onClick={() => handleShowE(r.id)}>
                                        Edit
                                    </Button>
                                    <Button variant="outline-danger" size="sm" onClick={() => delUser(r.id)}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </Table>
            <Modal show={showE} onHide={handleCloseE} backdrop='static'>
                <Modal.Header closeButton><b>Edit User</b></Modal.Header>
                <Modal.Body>
                    <EditUser></EditUser>
                </Modal.Body>
            </Modal>
        </Container>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    let users: string[]
    const res = await fetch("http://localhost:3000/user")
    users = await res.json()
    return {
        props: {
            users: JSON.parse(JSON.stringify(users))
        },
        revalidate: 1
    }
}

