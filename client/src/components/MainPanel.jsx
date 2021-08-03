import React, { useState } from 'react';
import Question from './Question';
import Pencil from 'react-bootstrap-icons/dist/icons/pencil-square'
import Avatar from 'react-bootstrap-icons/dist/icons/person-circle'
import axios from 'axios'


function MainPanel({ fullname }) {

    // const [questions, setQuestions] = useState([])

    axios.defaults.baseURL = 'http://www.localhost:3001'

    const [description, setDescription] = useState("")

    const questions = [
        {
            id: 123,
            description: "Hello there, is it beneficial to get admissionn into NITK ? ",
            posted_on: "24-Jan-2020",
            asked_by: "Harsh Kawadia",
        },
        {
            id: 124,
            description: "How is the Coding environment in NITK ? Like, are the any coding competitions or not ? If yes then what is the level of the questions being asked.",
            posted_on: "24-Feb-2020",
            asked_by: "Mayank Dua",
        },
        {
            id: 125,
            description: "Are there any additional benefits for girls? such as Scholarship or anything sort of it.",
            posted_on: "26-Mar-2020",
            asked_by: "Kiran Kaur",
        },
        {
            id: 126,
            description: "What is the level ofexposure of the students to non curricular activities for MCA.",
            posted_on: "30-Apr-2020",
            asked_by: "Arshi Jindani",
        },
    ]

    const onChange = (e) => {
        setDescription(e.target.value)
    }

    const handleSubmit = () => {
        if (description) {
            alert(description)
            axios.post('/question/post', { description: description }, {
                headers: {
                    token: localStorage.getItem("token")
                }
            }).then((res) => {
                setDescription("")
                console.log(res.data)
            })
        }
    }

    const onkeyup = (e) => {
        if (e.key === 'Enter')
            handleSubmit()
    }

    return (
        <div className="timeline">
            <div className="input_box">
                <div className="user_info">
                    <Avatar size={23} className="sidebar_avatar" />
                    <h6>{fullname}</h6>
                </div>
                <div className="input_btn">
                    <Pencil />
                    <div className="in_form">
                        <input type="text" placeholder="Ask what's in your mind ?" value={description} onChange={(e) => onChange(e)} onKeyPress={(e) => onkeyup(e)} required />
                    </div>
                </div>
            </div>

            {
                questions.map((question) => <Question key={question.id} question={question} />)
            }

        </div>
    );
}

export default MainPanel;