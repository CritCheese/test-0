import styles from '../../../styles/Home.module.css'
import Login from '../../../components/Login'
import { Container } from 'react-bootstrap'

export default function LoginA() {
    let e4 = localStorage.getItem('in')
    return (
        <Container>
            <p>admin login</p>
            <Login></Login>
        </Container>
    )
}