const quizDb = [{
        question: "Q1: Who is the creator of Python Programming Language ?",
        a: "Guido Van Rossum",
        b: "Brendon Eich",
        c: "Sir Tim Berner's Lee",
        d: "Håkon Wium Lie",
        ans: "ans1"
    },
    {
        question: "Q2: Which keyword is used to print something in Python ?",
        a: "echo",
        b: "Print()",
        c: "print()",
        d: "System.out.println",
        ans: "ans3"
    },
    {
        question: "Q3: Is Python Object Oriented Programming Language ?",
        a: "False",
        b: "True",
        c: "Can be True In Some cases",
        d: "Can be False In Some Cases",
        ans: "ans2"
    },
    {
        question: "Q4: In Which year was Python developed ?",
        a: "1990",
        b: "1987",
        c: "1992",
        d: "1991",
        ans: "ans4"
    },
    {
        question: "Q5: In GUI which widget is used to select multiple option ?",
        a: "Radio",
        b: "Check",
        c: "Canvas",
        d: "Frame",
        ans: "ans2"
    },
    {
        question: "Q6: Which of the following is not an application of Python ?",
        a: "Easy-to-learn",
        b: "Easy-to read",
        c: "Gui Programming",
        d: "Difficult-to-maintain",
        ans: "ans4"
    },
    {
        question: "Q7: How many type of data types are there in Python ?",
        a: "3",
        b: "5",
        c: "6",
        d: "4",
        ans: "ans3"
    },
    {
        question: "Q8: Which of the followinf is Numeric Data Type ?",
        a: "String",
        b: "List",
        c: "Tuple",
        d: "Complex",
        ans: "ans4"
    },
    {
        question: "Q9: How many types of operators are there in Python ?",
        a: "7",
        b: "4",
        c: "8",
        d: "2",
        ans: "ans1"
    },
    {
        question: "Q10: How many types of Airthematic Operators are there  ?",
        a: "8",
        b: "7",
        c: "9",
        d: "6",
        ans: "ans2"
    },
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer')

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDb[questionCount];

    question.innerHTML = questionList.question;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}

loadQuestion();

const getCheckedAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) =>
        curAnsElem.checked = false
    );
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckedAnswer()
    console.log(checkedAnswer);

    if (checkedAnswer == quizDb[questionCount].ans) {
        score++;
    };

    questionCount++;



    deselectAll();
    if (questionCount < quizDb.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = `
            <h3> You Scored ${score}/${quizDb.length} ✌</h3>
        `;

        showScore.classList.remove('scoreArea');
    }
});