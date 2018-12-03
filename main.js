const quizContainer = document.getElementById('quiz')
const resultContainer = document.getElementById('results')
const submitButton = document.getElementById('submit');

function buildQuiz(){}

function showResults(){}

//display quiz right away
buildQuiz();

// on submit, show results

submitButton.addEventListener('click', showResults);

const myQuestions = [{
    question: "Question 1",

    answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3"
    },
        correctAnswer: "c"
},
    {
    question: "Question 1",

    answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3"
    },

    correctAnswer: "b"
},
    {
    question: "Question 1",

    answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3"
   },
    corretAnswer: "a"
   }

]
