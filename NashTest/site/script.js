//{"question": " ", "answers": [],  "answer": " "}
let questions = [{"question": "2+2=?", "answers": ["2", "0", "4", "10"], "answer": "4"},
                 {"question": "Python better than c++", "answers": ["True", "False"],  "answer": "True"}]

questions.forEach(question => {
    const element = document.createElement("div");
    element.innerText = question.question;
    document.body.appendChild(element);
    console.log(1);
});