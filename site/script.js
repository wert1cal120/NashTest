//{"question": "", "answers": [], "questionType": "}", "answer": ""}


//GPT Prompt
// Напиши тест у форматі js массива.
// Використовуючи цей шаблон {"question": "", "answers": [], "questionType": "}", "answer": ""}. Тип питання може бути "radio" "checkbox" "textbox".
// У разі використання типу "textbox" блок answers  заповни так: answers = [""}

// Тема тесту: 
// Кількість питань: 
// Тип питань:

const questionsArray = [
    {
      "question": "Яке найбільше за площею озеро у світі?",
      "answers": ["Каспійське море", "Вікторія", "Байкал", "Мічиган"],
      "questionType": "radio",
      "answer": "Каспійське море"
    },
    {
      "question": "Які з наступних держав знаходяться на Африканському континенті? (оберіть всі правильні)",
      "answers": ["Єгипет", "ПАР", "Саудівська Аравія", "Аргентина", "Кенія", "Нігерія"],
      "questionType": "checkbox",
      "answer": ["Єгипет", "ПАР", "Кенія", "Нігерія"]
    },
    {
      "question": "Який найбільший за площею острів у світі?",
      "answers": [""],
      "questionType": "textbox",
      "answer": "Гренландія"
    },
    {
      "question": "Які з цих країн належать до Південної Америки? (оберіть всі правильні)",
      "answers": ["Бразилія", "Мексика", "Чилі", "Колумбія", "Куба", "Перу"],
      "questionType": "checkbox",
      "answer": ["Бразилія", "Чилі", "Колумбія", "Перу"]
    },
    {
      "question": "Яка з наведених річок є найдовшою у світі?",
      "answers": ["Амазонка", "Ніл", "Міссісіпі", "Янцзи"],
      "questionType": "radio",
      "answer": "Ніл"
    },
    {
      "question": "Яка річка протікає через Париж?",
      "answers": [""],
      "questionType": "textbox",
      "answer": "Сена"
    },
    {
      "question": "Яке море не омиває береги Європи?",
      "answers": ["Чорне море", "Балтійське море", "Середземне море", "Червоне море"],
      "questionType": "radio",
      "answer": "Червоне море"
    },
    {
      "question": "Які країни мають спільний кордон з Китаєм? (оберіть всі правильні)",
      "answers": ["Росія", "Непал", "Таїланд", "Монголія", "Казахстан", "Малайзія"],
      "questionType": "checkbox",
      "answer": ["Росія", "Непал", "Монголія", "Казахстан"]
    },
    {
      "question": "Яке місто є столицею Канади?",
      "answers": ["Оттава", "Торонто", "Ванкувер", "Монреаль"],
      "questionType": "radio",
      "answer": "Оттава"
    },
    {
      "question": "Які з наступних країн є частиною Скандинавії? (оберіть всі правильні)",
      "answers": ["Швеція", "Данія", "Фінляндія", "Норвегія", "Ісландія"],
      "questionType": "checkbox",
      "answer": ["Швеція", "Данія", "Норвегія"]
    },
    {
      "question": "У якому океані знаходяться Галапагоські острови?",
      "answers": ["Тихий океан", "Атлантичний океан", "Індійський океан", "Південний океан"],
      "questionType": "radio",
      "answer": "Тихий океан"
    },
    {
      "question": "Яка пустеля є найбільшою у світі?",
      "answers": ["Сахара", "Гобі", "Калахарі", "Аравійська пустеля"],
      "questionType": "radio",
      "answer": "Сахара"
    }
  ];
  

function submitAnswer() {
    const output = document.getElementsByName("test");
    console.log(output)

    output.forEach(variant => {
        if (variant.checked || output.length == 1) {
            console.log(variant.value);
        }
    });
}

function setQuestion(i) {
    setQuestionList();
    document.getElementById(`questionButton${i}`).setAttribute("disabled", "");

    document.getElementById("question-block").innerHTML = `<div id="question-number">Питання ${i+1}</div><div id="question-row"></div><div id="answers"></div>`
    const questionRow = document.getElementById("question-row");
    questionRow.innerText = questionsArray[i].question;

    const answers = document.getElementById("answers");

    
    for (let j = 0; j < questionsArray[i].answers.length; j++) {
        let answerDiv = document.createElement("div");
            answerDiv.setAttribute("class", "question");
            answers.appendChild(answerDiv);

        let answerButton = document.createElement("input");
            answerButton.setAttribute("type", questionsArray[i].questionType);
            answerButton.setAttribute("id", `answer${j}`)
            answerButton.setAttribute("name", "test");
            answerButton.setAttribute("value", questionsArray[i].answers[j]);
            answerDiv.appendChild(answerButton);

        let answerText = document.createElement("label");
            answerText.setAttribute("for", `answer${j}`);
            answerText.innerText = questionsArray[i].answers[j];
            if (questionsArray[i].questionType != "textbox") {
                answerDiv.appendChild(answerText);
            }
    }

    let answerSubmit = document.createElement("button");
        answerSubmit.setAttribute("type", "submit");
        answerSubmit.setAttribute("onclick", "submitAnswer()")
        // answerSubmit.setAttribute("disabled", "");
        answerSubmit.innerText = "Відповісти";
        document.getElementById("question-block").appendChild(answerSubmit);
}

function setQuestionList() {
    let questionListElement = document.getElementById("questions-list");
    questionListElement.innerHTML = "";

    for (let i = 0; i < questionsArray.length; i++) {
        const element = document.createElement("button");
        element.setAttribute("onclick", `setQuestion(${i})`);
        element.setAttribute("id", `questionButton${i}`);
        element.innerText = `Питання ${i+1}`;
        //element.innerText = `Питання ${i+1}: ${questionsArray[i].question}`;

        questionListElement.appendChild(element);

    }
}

setQuestionList()
setQuestion(0)