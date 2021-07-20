import React from 'react'
import { useEffect } from 'react'
import Container from 'react-bootstrap/Container'

export default function Landing() {

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
            <Container className="mt-3 d-flex flex-column justify-content-center align-items-center" style={styles.main_container}>
                <h1 className="animate-bounce">Hello Users, Welcome to the NITK Community</h1>

                {/* <div className="d-flex justify-content-around">
                    <AppLink type="login" className="mx-1 my-1 buttons animate-bounce" />
                    <AppLink type="register" className="mx-1 my-1 buttons animate-bounce" />
                </div> */}
            </Container>
        </>

    )
}
