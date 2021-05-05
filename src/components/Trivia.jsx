import {useEffect,useState} from 'react';
export default function Trivia ({
    data,
    setTimeOut,
    questionNumber,
    setQuestionNumber
}) {
    const [question,setQuestion]=useState(null);
    return ( 
        <div className="trivia" >
            <div className="question">Which one is not the name of a browser </div>
            <div className="answers">
                <div className="answer">Mozilla Firefox</div>
                <div className="answer">Chrome</div>
                <div className="answer">Opera</div>
                <div className="answer">Siri</div>
            </div>
        </div>
    )
}