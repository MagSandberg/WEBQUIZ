class Question {
    constructor(statement, correctAnswer){
        this.statement = statement
        this.correctAnswer = correctAnswer
    }
}

const questions = [];
const qList = document.querySelector('#questions');
const scoreDisplay = document.querySelector('#score');
let score = 0;

function startButtonClick(){
    questions.splice(0, questions.length);

    questions.push(
    new Question("Gillar Niklas kaffe?", "True"),
    new Question("Är jorden platt?", "False"),
    new Question("År programmering kul?", "True"),
    );

    while (qList.childElementCount > 0) {
        qList.children[0].remove();
    }

    displayQuestions();
}

function displayQuestions(){
    for (const question of questions) {
    //Skapa element
    const card = document.createElement('li');
    const cardHeader = document.createElement('div');
    const cardBody = document.createElement('div');
    const cardText = document.createElement('h4');
    const cardFooter = document.createElement('div');
    const trueButton = document.createElement('button');
    const falseButton = document.createElement('button');

    //Styla element
    card.classList.add("card", "border-0", "mb-2");
    cardHeader.classList.add("card-header", "bg-info", "fw-bold");
    cardBody.classList.add("card-body", "bg-dark", "text-warning");
    cardText.classList.add("card-text");
    cardFooter.classList.add("card-footer", "bg-info");
    trueButton.classList.add("btn", "btn-success", "mx-1");
    falseButton.classList.add("btn", "btn-danger", "mx-1");

    //Innehåll i element
    cardHeader.innerText = questions.indexOf(question) + 1;
    cardText.innerText = question.statement;
    trueButton.innerText = "True";
    falseButton.innerText = "False";

    //Sätta upp event på element
    trueButton.onclick = () => {
        guessButtonClick(question, cardBody, falseButton, trueButton, "True");
    };

    falseButton.onclick = () => {
        guessButtonClick(question, cardBody, falseButton, trueButton, "False");
    };
    
    //Lägg till element i DOM
    cardBody.append(cardText);
    cardFooter.append(trueButton, falseButton);
    card.append(cardHeader, cardBody, cardFooter);
    qList.append(card);
    }
}

function guessButtonClick(question, cardBody, falseButton, trueButton, guess){
        if(question.correctAnswer === guess) {
            score++;
            scoreDisplay.innerText = score

            cardBody.classList.remove("bg-dark", "text-warning");
            cardBody.classList.add("bg-success", "text-light");
        } else {
            cardBody.classList.remove("bg-dark", "text-warning");
            cardBody.classList.add("bg-danger", "text-light");
        }
        trueButton.disabled = true;
        falseButton.disabled = true;
}