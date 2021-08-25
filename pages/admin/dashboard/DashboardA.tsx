import styles from '../../../styles/Home.module.css'
import { Container, Table, Button } from 'react-bootstrap'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { User } from '../../../pages/users/User'
import axios from 'axios'
import AddUser from '../../../components/AddUser'
import { Key, ReactChild, ReactFragment, ReactPortal } from 'react'

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

export function delUser(idx: number) {
    const axios = require('axios')

    axios.delete(`http://localhost:3000/user/${idx}`)
        .then(function (response: any) {
            // handle success
            console.log(response);
        })
        .catch(function (error: any) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}

export function editUser(idx: number) {
    const axios = require('axios')

    axios.get(`http://localhost:3000/user/${idx}`)
        .then(function (response: any) {
            // handle success
            console.log(response);
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

    return (
        <Container>
            <p>admin dashboard</p>
            <Button variant="primary" size="sm" >Add an User</Button>
            <AddUser></AddUser>
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
                                    <Button variant="outline-secondary" size="sm" >
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
        </Container>
    )
}



