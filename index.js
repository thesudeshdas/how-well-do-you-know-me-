// ex14-&-ex15
var Table = require('cli-table');
var readlineSync = require('readline-sync');
const chalk = require('chalk');

// chalk color
const inverse = chalk.inverse.bold;
const title = chalk.underline.bold;
const scoreColor = chalk.bgWhite.bold.black;

// required variables
var score = 0, highScore = 4;

const questionBank = [
    {
        question: 'Take a wild guess. Am I older than 25?',
        answer: 'No',
    },
    {
        question: 'Do you think I live in Cuttack, Odisha (India\'s Best kept Secret)?',
        answer: 'Yes',
    },
    {
        question: 'Where was I born?',
        answer: 'Jorhat',
    },
    {
        question: 'What sport do I like?',
        answer: 'Football',
    },
    {
        question: 'What is my favourite superhero?',
        answer: 'Iron Man',
    },
];

// fucntions used
const log = console.log;

function separator() { log(('\n--------------------------------------------------------\n')); };

const showScore = () => { log(`Your current ${scoreColor(` score is ${score} `)}`); };

function checkAnswer(question, answer) {
    var getUserAns = readlineSync.question(`${question}\n`);

    if(getUserAns.toLowerCase() === answer.toLowerCase()) {
        log('Hell Yeah! That\'s the right answer.');
        score = score + 1;
    } else {
        log('Uh Oh! Unfortunately, that\'s not right.');
    }

    showScore();
    separator();
}

const checkHighScoreBeaten = () => {
    if (score > highScore) {
        log(`Congratulations, you beat the high score. The new  ${scoreColor(` high score is ${score}. `)}\nDo send a screenshot of your score. My instagram and twitter handle is - ${scoreColor(` @thesudeshdas `)}\n\n`);
    } else {
        log(`Thank you for playing. Your final score is ${score}\n\n`);
    }
};

const showScoreBoard = () => {
    const table = new Table({
        head: [scoreColor('Sl No.'),scoreColor('Player'), scoreColor('Score')],
        chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
            , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
            , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
            , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
    });

    table.push(
        ['1','Dash', '4'],
        ['2','Sudesh', '3'],
    );

    log(title('Here\'s the cureent high score board:-\n'))
    log(table.toString());
};


let userName = readlineSync.question('Hi there! May I know your name please?\n');
log(`\nHello ${inverse(` ${userName}! `)} It\'s nice to meet you.`);
separator();
console.log('Lets see if you know me best.')
separator();

// loop questions
for (let i = 0; i < questionBank.length; i++) {
    checkAnswer(questionBank[i].question, questionBank[i].answer);
}

checkHighScoreBeaten();
showScoreBoard();