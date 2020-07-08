const cardsContainer = document.getElementById('cards-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const currentEl = document.getElementById('current');
const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const addCardBtn = document.getElementById('add-card');
const clearBtn = document.getElementById('clear');
const addContainer = document.getElementById('add-container');

// keep track of current card
let currentActiveCard = 0;
// store Dom card
const cardsEl = [];
// store cards data
const cardsData = [
    {
        question: "What must a variable begin with?",
        answer: 'A letter, $ or _'
    },
    {
        question: "What is a variable?",
        answer: 'Container for a piece of data'
    },
    {
        question: "Example of case sensitive variable",
        answer: 'This is variable'
    }
];

// create all cards 
function createCards(){
    cardsData.forEach((data,index)=>createCard(data,index));
}
// creat a single card 
function createCard(data,index){
    const card = document.createElement('div');
    card.classList.add('card');
    if (index===0){
        card.classList.add('active');
    }
    card.innerHTML = 
    `
            <div class="inner-card">
                <div class="inner-card-fron">
                    <p>
                   ${data.question}
                    </p>
                </div>
                <div class="inner-card-back">
                    <p>
                    ${data.answer}
                    </p>
                </div>
            </div>
    `;
    card.addEventListener('click',()=>{
        card.classList.toggle('show-answer');
    })
                // add to Dom cards 
                cardsEl.push(card);
                cardsContainer.appendChild(card);
updateCurrentText();
}
createCards();
function updateCurrentText(){
    currentEl.innerText = `${currentActiveCard+1}/${cardsEl.length}`
}