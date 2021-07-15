import React from 'react'
import { useEffect } from 'react'
import Container from 'react-bootstrap/Container'

import AppLink from '../components/AppLink'

export default function Home() {

    const styles = {
        main_container: {
            height: "35rem",
        },
    }

    useEffect(() => {
        document.title = "NITK-HUB"
    }, [])

    return (

        <>
            <Container className="mt-3 d-flex justify-content-center align-items-center" style={styles.main_container}>
                <div className="d-flex justify-content-around">
                    <AppLink type="login" className="mx-1 my-1 buttons animate-bounce" />
                    <AppLink type="register" className="mx-1 my-1 buttons animate-bounce" />
                </div>
            </Container>
        </>

    )
}
