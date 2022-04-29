// Java script for Quiz project 
//creating the question bank array 
const questionDatabase = [
    {
        question: "1.Which of the following property changes the width of left border?",
        a: "border bottom width",
        b: "border top width",
        c: "border left width",
        d: "border right width",
        correct: "c",
    },    
    {
        question: "2.Which of the following property is used to control the flow and formatting of text?",
        a: "white space",
        b: "text shadow",
        c: "text decoration",
        d: "text transform",
        correct: "a",
    },    
    {
        question: "3.Which of the following property is used to set the color of a text?",
        a: "colour",
        b: "direction",
        c: "letter spacing",
        d: "word spacing",
        correct: "c",
    },    
    {
        question: "4.Which of the following property is used to create a small-caps effect?",
        a: "font family",
        b: "font style",
        c: "font variant",
        d: "font weight",
        correct: "a",
    },    
    {
        question: "5.Where is the correct place to insert a JavaScript?",
        a: "head section",
        b: "body section",
        c: "both head and body section",
        d: "none of the above",
        correct: "a",
    },    
    {
        question: "6.Inside which HTML element do we put the JavaScript?",
        a: "<script>",
        b: "<js>",
        c: "<scripting>",
        d: "<javascript>",
        correct: "a",
    },
    {
        question: "7.Which Of The Dialog Box Display a Message And a Data Entry Field??",
        a: "Alert()",
        b: "Prompt()",
        c: "Confirm()",
        d: "Msg()",
        correct: "b",
    },
    {
        question: "8.If Button is clicked .......Event Handler is invoked.?",
        a: "OnSubmit()",
        b: "OnLoad()",
        c: "IsPostBack()",
        d: "OnClick()",
        correct: "d",
    },
    {
        question: "9.A Function Associated With An object is Called?",
        a: "function",
        b: "method",
        c: "link",
        d: "none",
        correct: "b",
    },
    {
        question: "10.JavaScript File Has An Extension of?",
        a: "html",
        b: "script",
        c: "js",
        d: "none of the above",
        correct: "c",
    },


];
//The getElementById () method returns the element that has the ID attribute with the specified value. 
//The querySelectorAll() method returns a collection of an element's child elements that match a specified CSS selector(s), as a static NodeList object.
// Moving the values to required constants
const quiz= document.getElementById('quiz')
const answerElement = document.querySelectorAll('.answer')
const questionhtmlEle = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

// initializing the currentquiz and score values to 0
let currentQuiz = 0
let score = 0
//loadquiz function will return answer selected
loadQuiz()


function loadQuiz() {

    deselectAns()

    const currentquestionDatabase = questionDatabase[currentQuiz]

    questionhtmlEle.innerText = currentquestionDatabase.question
    a_text.innerText = currentquestionDatabase.a
    b_text.innerText = currentquestionDatabase.b
    c_text.innerText = currentquestionDatabase.c
    d_text.innerText = currentquestionDatabase.d
}

function deselectAns() {
    answerElement.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerElement.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

// Submitbtn will check for the answers are wrong / right by checking the answer variable
//alert function enabled for each answer for the right or wrong answers
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === questionDatabase[currentQuiz].correct) {
           score++
           alert("Congradulations! right answer");
       }
       else
       {alert("Sorry Wrong answer. Try Again");}
       

       currentQuiz++

       if(currentQuiz < questionDatabase.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You have answered ${score}/${questionDatabase.length} questions correctly</h2>
           

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})
// Audio API , playing a beep sound when a button click ( ref w3school)
var bleep = new Audio ();
bleep.src = "bleep.mp3"

//clock using canvas 
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
setInterval(drawClock, 1000);

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  var grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();
  grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
  grad.addColorStop(0, '#333');
  grad.addColorStop(0.5, 'white');
  grad.addColorStop(1, '#333');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0.1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
  ctx.fillStyle = '#333';
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius*0.15 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(num = 1; num < 13; num++){
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.85);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    // second
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}
