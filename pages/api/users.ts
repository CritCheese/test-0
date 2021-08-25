import { GetStaticProps } from "next"

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