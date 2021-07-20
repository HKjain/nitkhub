import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import PersonIcon from 'react-bootstrap-icons/dist/icons/person-circle'
import EmailIcon from 'react-bootstrap-icons/dist/icons/envelope-open-fill'
import KeyIcon from 'react-bootstrap-icons/dist/icons/key-fill'
import PersonLineIcon from 'react-bootstrap-icons/dist/icons/person-lines-fill'
import PeopleFillIcon from 'react-bootstrap-icons/dist/icons/people-fill'
import EyeIcon from 'react-bootstrap-icons/dist/icons/eye-fill'
import GIcon from 'react-bootstrap-icons/dist/icons/google'
import Button from 'react-bootstrap/Button'

import Colors from '../assets/Colors'

function Register(props) {

    const styles = {
        box: {
            width: "80%",
            borderRadius: "0.8rem",
        },
        column: {
            height: "fit-content",
        },
        round: {
            bottom: "-35px",
            right: "-35px",
            borderRadius: "6vh",
            height: "10rem",
            width: "10rem",
        },
        round2: {
            borderRadius: "6vh",
            height: "100%",
            width: "100%",
            backgroundColor: Colors.lightBlue,
        },
        forms: {
            zIndex: 3,
            width: '100%',
            padding: "10px",
        },
        registerBtn: {
            fontWeight: "bold",
            backgroundColor: 'transparent',
            border: `2.5px solid ${Colors.lightBlue}`,
            borderRadius: "0.4rem",
            color: Colors.lightBlue
        },
        googleBtn: {
            fontWeight: "bold",
            backgroundColor: 'transparent',
            border: `2.5px solid ${Colors.lightred}`,
            borderRadius: "0.4rem",
            color: Colors.lightred
        },
    }

    axios.defaults.baseURL = "http://www.localhost:3001"

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        gender: '',
        email: '',
        password: ''
    });

    const { first_name, last_name, gender, email, password } = formData;
    const [registerEr, setRegisterEr] = useState("")

    const onChange = (e) => {
        if ((e.target.name === 'first_name' || e.target.name === 'last_name') && e.target.value.length !== 0) {
            const t = e.target.value
            const ch = t[t.length - 1];
            if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z') || (ch === ' '))
                setFormData({ ...formData, [e.target.name]: e.target.value });
        }
        else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    }

    useEffect(
        () => {
            document.title = "Register"
        }, []
    )

    const onSubmit = async (e) => {

        e.preventDefault();
        await axios.post("/api/register", { formData: formData }, { validateStatus: () => true }).then(res => {
            if (res.status !== 201)
                setRegisterEr(res.data.message)
            else {
                setRegisterEr(res.data.message)
                document.location = "/login"
            }
        }).catch(errors => {
            console.log(errors)
        })

    }

    const googleAuth = () => {
        window.location.href = "http://localhost:3001/auth/google"
    }

    const eyeToggle = () => {
        var element = document.getElementById('pass')
        if (element.getAttribute('type') === 'password') {
            element.setAttribute('type', 'text')
        }
        else
            element.setAttribute('type', 'password')
    }

    return (
        <>
            <Container>
                <Row>
                    <Col lg={3}>
                    </Col>
                    <Col lg={6} style={styles.column} className="p-1 my-5 d-flex justify-content-center">
                        <div style={styles.box} className="d-flex align-items-center flex-column overflow-hidden p-2 shadow-box position-relative h-75">

                            <div className="animate-spin bg-danger position-absolute" style={styles.round}>
                                <div style={styles.round2} className="animate-color">

                                </div>
                            </div>

                            <div style={styles.forms}>
                                <div className="d-flex my-2 flex-column align-items-center justify-content-center">
                                    <PersonIcon size={50} color={Colors.lightBlue} />
                                    <h3 style={{ color: Colors.lightBlue, marginTop: "20px", fontSize: 35 }}>REGISTER</h3>
                                    {registerEr && <h5 style={{ color: Colors.lightred, marginTop: "3px", fontSize: 15 }}>{registerEr}</h5>}
                                </div>
                                <Form className="d-flex flex-column" onSubmit={(e) => onSubmit(e)}>

                                    {/* First Name */}
                                    <Form.Group id="first_name" className="my-3">
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text style={{ backgroundColor: 'transparent', border: 'none' }}>
                                                    <PersonLineIcon size={20} style={{ color: Colors.lightBlue }} />
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control className="custom-button" type="text" placeholder="Enter First Name" name="first_name"
                                                value={first_name}
                                                onChange={(e) => onChange(e)}
                                                required
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                    {/* Last Name */}
                                    <Form.Group id="last_name" className="my-3">
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text style={{ backgroundColor: 'transparent', border: 'none' }}>
                                                    <PersonLineIcon size={20} style={{ color: Colors.lightBlue }} />
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control className="custom-button" type="text" placeholder="Enter Last Name" name="last_name"
                                                value={last_name}
                                                onChange={(e) => onChange(e)}
                                                required
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                    {/* Gender */}
                                    <Form.Group id="gender" className="my-3">
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text style={{ backgroundColor: 'transparent', border: 'none' }}>
                                                    <PeopleFillIcon size={20} style={{ color: Colors.lightBlue }} />
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control className="custom-button" name="gender" as="select"
                                                value={gender}
                                                onChange={(e) => onChange(e)}
                                                required
                                            >
                                                <option value='' disabled>Choose gender</option>
                                                <option value='Male'>Male</option>
                                                <option value='Female'>Female</option>
                                            </Form.Control>
                                        </InputGroup>
                                    </Form.Group>
                                    {/* Email Address */}
                                    <Form.Group id="email" className="my-3">
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text style={{ backgroundColor: 'transparent', border: 'none' }}>
                                                    <EmailIcon size={20} style={{ color: Colors.lightBlue }} />
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control className="custom-button" type="email" placeholder="Enter Email" name="email"
                                                value={email}
                                                onChange={(e) => onChange(e)}
                                                required
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                    {/* Password */}
                                    <Form.Group id="password" className="my-3">
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text style={{ backgroundColor: 'transparent', border: 'none' }}>
                                                    <KeyIcon size={20} style={{ color: Colors.lightBlue }} />
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control className="custom-button" type="password" placeholder="Enter Password" name="password"
                                                value={password}
                                                id="pass"
                                                onChange={(e) => onChange(e)}
                                                minLength="6"
                                                required
                                            />
                                            <EyeIcon size={20} className="d-flex align-self-center" onClick={() => eyeToggle()} style={{ color: Colors.lightBlue, cursor: 'pointer' }} />
                                        </InputGroup>
                                    </Form.Group>

                                    <Button type="submit" style={styles.registerBtn} className="mt-4 mb-1 buttons letter-spacing-3 align-self-center w-50">R E G I S T E R</Button>
                                    <span className="align-self-center">OR</span>
                                    <Button style={styles.googleBtn} onClick={googleAuth} className="my-1 buttons letter-spacing-3 googleBtn align-self-center w-50"><i><GIcon size={15} /></i> Sign in with Google</Button>
                                </Form>
                                <p>Already have an account? <Link to="/login" className="text-decoration-none" >Login</Link></p>
                            </div>

                        </div>
                    </Col>
                    <Col lg={3}>
                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default Register;