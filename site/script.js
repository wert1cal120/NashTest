//{"question": "", "answers": [], "questionType": "", "answer": ""}
let questionsArray = [{"question": "2+2=?", "answers": ["2", "0", "4", "10"], "questionType": "radio", "answer": "4"},
                 {"question": "Python better than c++", "answers": ["True", "False"], "questionType": "radio", "answer": "True"}]



function setQuestion(i) {
    document.getElementById("question-page").innerHTML = '<div id="question-row"></div><div id="answers"></div>'
    
    const questionRow = document.getElementById("question-row");
    questionRow.innerText = questionsArray[i].question;

    const answers = document.getElementById("answers");
    for (let j = 0; j < questionsArray[i].answers.length; j++) {
        let answerDiv = document.createElement("div");
            answers.appendChild(answerDiv);

        let answerButton = document.createElement("input");
            answerButton.setAttribute("type", "radio");
            answerButton.setAttribute("id", `answer${j}`)
            answerButton.setAttribute("name", "test");
            answerButton.setAttribute("value", questionsArray[i].answer);
            answerDiv.appendChild(answerButton);

        let answerText = document.createElement("label");
            answerText.setAttribute("for", `answer${j}`);
            answerText.innerText = questionsArray[i].answers[j];
            answerDiv.appendChild(answerText);
    }

    let answerSubmit = document.createElement("button");
        answerSubmit.setAttribute("type", "submit");
        answerSubmit.innerText = "Submit answer";
        document.getElementById("question-page").appendChild(answerSubmit);
}

let questionListElement = document.getElementById("questions-list");

for (let i = 0; i < questionsArray.length; i++) {
    const element = document.createElement("button");
    element.setAttribute("onclick", `setQuestion(${i})`);
    element.innerText = "Питання " + (i+1) + " : " + questionsArray[i].question;
    element.id = i;
    questionListElement.appendChild(element);
    
}


setQuestion(0)