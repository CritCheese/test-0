import { GetStaticProps } from 'next'
import { User } from '../pages/users/User'
import { Button, Form } from 'react-bootstrap/'
import { Admin } from '../pages/admin/Admin'
import React from 'react'
import { Router, useRouter } from 'next/dist/client/router'


// export const getStaticProps: GetStaticProps = async (context) => {
//     const res = await fetch('http://localhost:3000/user')
//     const res1 = await fetch('http://localhost:3000/admin')
//     const users: User[] = await res.json()
//     const admins: Admin[] = await res1.json()
//     // console.log(users)
//     return {
//         props: {
//             users, admins
//         }
//     }
// }

export default function Login() {
    const router = useRouter()

    const loginA = async (event: any) => {
        event.preventDefault()
        const res = await fetch('http://localhost:3000/admin')
        const admins: Admin[] = await res.json()
        return {
            props: {
                admins
            }
        }

    }

    const loginU = async (event: any) => {
        event.preventDefault()
        const res = await fetch('http://localhost:3000/user')
        const users: User[] = await res.json()
        // console.log(users)
        return {
            props: {
                users
            }
        }
    }



    const checkA = async (event: any, n2: string, p2: string) => {
        let s2 = false
        event.preventDefault()
        const admins = (await loginA(event)).props.admins
        console.log(admins)
        for (let admin of admins) {
            if (admin.name == n2 && admin.password == p2) {
                s2 = true
                alert('Success')
                localStorage.setItem('in', 'true')
                localStorage.setItem('role', 'admin')
                localStorage.setItem('name', n2)
                router.push('../dashboard/DashboardA')

            }
        }
        if (s2 == false) {
            return alert("Failed!")
        }
    }

    const checkU = async (event: any, n1: string, p1: string) => {
        let s1 = false
        let s2 = ''
        const users = (await loginU(event)).props.users;
        console.log(users)
        for (let user of users) {
            if (user.name == n1 && user.password == p1) {
                s1 = true
                if (user.status == 'active') {
                    s1 = true
                    alert('Success')
                    localStorage.setItem('in', 'true')
                    localStorage.setItem('role', 'admin')
                    localStorage.setItem('name', n1)    
                    router.push('./users/dashboard/DashboardU')
                } else {
                    s1 = false
                    s2 = 'disabled'
                }
            }
        }
        if (s1 == false && (s2 == 'active' || s2 == '')) {
            alert("Failed!")
        }
        if (s1 == false && s2 == 'disabled') {
            alert('Failed! Account disabled')
        }
    }

    const check = async (event: any) => {
        const n1 = event.target.formName.value
        // console.log(n1)
        const p1 = event.target.formPassword.value
        event.preventDefault()
        // console.log(users)

        if (window.location.href == "http://localhost:3001/admin/login/LoginA") {
            checkA(event, n1, p1)
        }

        else {
            checkU(event, n1, p1)
        }
    }



    return (
        <Form onSubmit={check}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name: </Form.Label>
                <Form.Control type="text" placeholder="enter name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password: </Form.Label>
                <Form.Control type="password" required />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

// export async function getStaticUsers(context:any){
//     const res = await fetch('http://localhost:3002/user')
//     const data = res.json()

//     if (!data){
//         return {
//             notFound:true
//         }
//     }

//     return {
//         props: {data}
//     }
// }