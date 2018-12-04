const quizContainer = document.getElementById('quiz')
const resultContainer = document.getElementById('results')
const submitButton = document.getElementById('submit');

function buildQuiz(){
    //place to store HTML output
    const output = [];
    //for each question...
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            //storing the list anser choices
            const answers = [];
        }
    )
}

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
    question: "Question 2",

    answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3"
    },

    correctAnswer: "b"
},
    {
    question: "Question 3",

    answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3"
   },
    corretAnswer: "a"
   }

]
