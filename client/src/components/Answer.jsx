function Answer({ answer }) {

    return (
        <div className="answer">
            <div className="answer_head">
                <div className="details">
                    <div className="answer_info">
                        <h6>{answer.given_by}</h6>
                        <p> Answered on {answer.posted_on}</p>
                    </div>
                </div>
            </div>
            <div className="answer_body">
                <p className="answer_description">{answer.description}</p>
            </div>
        </div>
    );
}

export default Answer;