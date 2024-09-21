//{"question": " ", "answers": [],  "answer": " "}
let questionsArray = [{"question": "2+2=?", "answers": ["2", "0", "4", "10"], "answer": "4"},
                 {"question": "Python better than c++", "answers": ["True", "False"],  "answer": "True"}]



function setQuestion() {
    console.log(1)
}

let questionListElement = document.getElementById("questions-list");

for (let i = 0; i < questionsArray.length; i++) {
    const element = document.createElement("button");
    element.setAttribute("onclick", "setQuestion()");
    element.innerText = "Питання " + i + " : " + questionsArray[i].question;
    element.id = i;
    questionListElement.appendChild(element);
    
}
