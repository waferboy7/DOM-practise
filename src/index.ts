import questions from "@pages/index";

const root = document.querySelector('#root');

const div = document.createElement('button');
const text = 'Привет';

div.innerText = text;

root?.append(div);

root?.append(questions[0]);