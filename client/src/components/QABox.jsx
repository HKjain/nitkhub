// import axios from "axios"

function QABox(param) {

    const answer = param.answer
    const QA = param.isQuestion == "1" ? "Questioned" : "Answered"

    // CAN BE USED IF WE WANT TO DELETE PARTICULAR QUESTION/ANSWER
    // SERVER QUERY IS ALSO ALREADY WRITTEN

    // const onClick = (e, id) => {
    //     // console.log(e, id)

    //     axios.post(`/answer/deleteAnswer/${id}`, id).then((res) => {
    //         // if (res.data.error)
    //         //     setLoginEr(res.data.error)
    //         // else {
    //         //     setLoginEr(res.data.message)
    //         // }
    //     })
    //     param.onDelete(param.answer);
    // }

    return (

        // <div className="answer" id={answer.id} onClick={(e) => onClick(e, answer.id)}>
        <div className="answer" id={answer.id}>
            <div className="answer_head">
                <div className="details">
                    <div className="answer_info">
                        <h6>{answer.postedBy}</h6>
                        <p> {QA} on {answer.updatedAt}</p>
                    </div>
                </div>
            </div>
            <div className="answer_body">
                <p className="answer_description">{answer.description}</p>
            </div>
        </div>
    );
}

export default QABox;