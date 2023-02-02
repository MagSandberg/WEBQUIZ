class Question {
    constructor(statement, correctAnswer){
        this.statement = statement
        this.correctAnswer = correctAnswer
    }
}

const questions = 
[
    new Question("Gillar Niklas kaffe?", true),
    new Question("Är jorden platt?", false),
    new Question("År programmering kul?", true),
];

const qList = document.querySelector('#questions');

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


    //Lägg till element i DOM
    cardBody.append(cardText);
    cardFooter.append(trueButton, falseButton);
    card.append(cardHeader, cardBody, cardFooter);
    qList.append(card)
}

// const html = 
//     `
//     <div class="card border-0">
//         <div class="card-header bg-info fw-bold">1</div>
//         <div class="card-body bg-dark text-warning">
//             <h4 class="card-text">${question.statement}</h4>
//         </div>
//         <div class="card-footer bg-info">
//             <button class="btn btn-success">True</button>
//             <button class="btn btn-danger">False</button>
//         </div>
//     </div>
//     `;
//     qList.innerHTML += html;