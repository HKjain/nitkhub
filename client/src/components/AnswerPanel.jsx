import React, { useState } from 'react';
import Pencil from 'react-bootstrap-icons/dist/icons/pencil-square'
import Avatar from 'react-bootstrap-icons/dist/icons/person-circle'
import Question from './Question';
import Answer from './Answer';
import axios from 'axios'


function AnswerPage({ fullname }) {

    // const [questions, setQuestions] = useState([])

    axios.defaults.baseURL = 'http://www.localhost:3001'

    const [description, setDescription] = useState("")

    const question = [
            {
                id: 123,
                description: "Hello there, is it beneficial to get admissionn into NITK ? ",
                posted_on: "24-Jan-2020",
                asked_by: "Harsh Kawadia",
            },
    ]

    const answers = [
        {
            id: 1203,
            description: "If you are talking about NITK Surathkal. It is one the best technical institute in India. This is the place where you can get the best education as well as overall improvement in your personality. Coming to the question, as you have given about the MCA course. This is one the best colleges for MCA also. You will get a good syllabus, experienced and good faculties, good lab and also the many extracurricular activities to improve technical knowledge as well as your persona. Placement is also good for MCA. Placement statistics are quite good for last 5–6 years.",
            posted_on: "25-Jan-2020",
            given_by: "Deep Govani",
        },
        {
            id: 1204,
            description: "Out of 91 MCA students in current batch 52 are placed and 39 are yet to be placed. That is close to 57%. Note that placement season is not yet over and will go on for another 4 months. So you can expect better statistics. Companies who have hired MCA students in NITK include - Microsoft, Morgan Stanley, Oracle, Samsung, Goldman Sachs, IBM, TCS, Citicorps, etc.",
            posted_on: "26-Jan-2020",
            given_by: "Mayank Dua",
        },
        {
            id: 1205,
            description: "National Institute of Technology, Suratkhal (NIT Suratkhal) is ranked 21st in the Engineering category by NIRF 2019. It is one of the leading engineering colleges in the country, was established in 2002, and was formerly known as Karnataka Regional Engineering College (KREC). It is one of the oldest and pioneer Technical Institutions in India which offers you undergraduate, postgraduate and doctoral programs in various specializations.",
            posted_on: "27-Jan-2020",
            given_by: "Kiran Kaur",
        },
        {
            id: 1206,
            description: "The reason why NITK is said to be good is because of the crowd that enters the college. The students in this institution are among the top 1% of the nation's young brains. Hence, how the college is, is determined by your efforts rather than the name and brand.",
            posted_on: "28-Jan-2020",
            given_by: "Sana Jindani",
        },
    ]

    const onChange = (e) => {
        setDescription(e.target.value)
    }

    const handleSubmit = () => {
        if (description) {
            alert(description)
            axios.post('/answer/post', { description: description }, {
                headers: {
                    token: localStorage.getItem("token")
                }
            }).then((res) => {
                setDescription("")
                console.log(res.data)
            })
        }
    }

    const onAdd = (e) => {
            handleSubmit()
    }

    return (
        <div className="timeline">
            {
                    question.map((question) => <Question key={question.id} question={question} />)
            }
            <div className="box">All Answers</div>
            {
                answers.map((answer) => <Answer key={answer.id} answer={answer} />)
            }
            <div className="ans_input_box">
                <div className="user_info">
                    <Avatar size={23} className="sidebar_avatar" />
                    <h6>{fullname}</h6>
                </div>
                <div className="ans_input_btn">
                    <Pencil />
                    <div className="in_form">
                        <input type="text" placeholder="Add your Answer" value={description} onChange={(e) => onChange(e)} required />
                    </div>
                </div>
                <button onClick = {(e) => onAdd(e)}>Add </button>
            </div>
        </div>
    );
}

export default AnswerPage;