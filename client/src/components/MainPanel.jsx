import React from 'react';
import Question from './Question';
import Pencil from 'react-bootstrap-icons/dist/icons/pencil-square'

function MainPanel(props) {

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

    return (
        <div className="timeline">
            <div className="input_box">
                <div className="input_btn">
                    <Pencil />
                    <form className="in_form">
                        <input type="text" placeholder="Ask what's in your mind ?" />
                        <button onClick={() => { console.log("Called") }} type="submit">Ask</button>
                    </form>
                </div>
            </div>

            {
                questions.map((question) => <Question question={question} />)
            }

        </div>
    );
}

export default MainPanel;