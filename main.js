let startBtn = document.querySelector(".start_btn");
let instruBox = document.querySelector(".instru_box");
let startBox = document.querySelector(".start_box");
let backbtn = document.querySelector(".back");
let continuebtn = document.querySelector(".continue");
let quetionBox = document.querySelector(".quetion_box");
let quetionNum = document.querySelector(".quetion_num");
let quetionTxt = document.querySelector(".quetion_txt");
let nextBtn = document.querySelector(".next");
let submitBtn = document.querySelector(".submit");
let options = document.querySelector(".options");
let option = document.querySelectorAll(".option");
let quetionNumber = document.querySelector(".quetion_number");

let totalQuetion = document.querySelector(".total_quetion");
let resultBox = document.querySelector(".result_box");
let scoreNum = document.querySelector(".score_num");
let replayBtn = document.querySelector(".replay");
let totlQuetions = document.querySelector(".totl_quetions");

let userScore = 00;
let correctQue = 0;
let wrongQue = 0;

startBtn.addEventListener("click", () => {
  instruBox.classList.add("activeInstr");
  startBox.classList.add("activeStart");
});

backbtn.onclick = () => {
  startBox.classList.remove("activeStart");
  instruBox.classList.remove("activeInstr");
};

let quetion_count = 0;
// console.log(quetions.length);

continuebtn.onclick = () => {
  quetionBox.classList.add("activeQuetion");
  instruBox.classList.remove("activeInstr");
  get_quetions();
  start_time(15);
};

nextBtn.onclick = () => {
  
    next_que();
    clearInterval(timerstart);
    start_time(15);
  
};

const get_quetions = () => {
  let que = quetions[0].quetion;
  let queNum = quetions[0].no;
  let optionsAdd =
    '<div class="option" onclick="selectedOption(this)"><span>' +
    quetions[quetion_count].options[0] +
    "</span></div>" +
    '<div class="option" onclick="selectedOption(this)"><span>' +
    quetions[quetion_count].options[1] +
    "</span></div>" +
    '<div class="option" onclick="selectedOption(this)"><span>' +
    quetions[quetion_count].options[2] +
    "</span></div>" +
    '<div class="option" onclick="selectedOption(this)"><span>' +
    quetions[quetion_count].options[3] +
    "</span></div>";

  quetionTxt.innerHTML = que;
  quetionNum.innerHTML = queNum;
  options.innerHTML = optionsAdd;
  quetionNumber.innerHTML = quetions[0].no;
  totalQuetion.innerHTML = quetions.length;
};

const next_que = () => {
  quetion_count++;
  //   console.log(quetion_count);
  let que = quetions[quetion_count].quetion;
  let queNum = quetions[quetion_count].no;
  let optionsAdd =
    '<div class="option" onclick="selectedOption(this)"><span>' +
    quetions[quetion_count].options[0] +
    "</span></div>" +
    '<div class="option" onclick="selectedOption(this)"><span>' +
    quetions[quetion_count].options[1] +
    "</span></div>" +
    '<div class="option" onclick="selectedOption(this)"><span>' +
    quetions[quetion_count].options[2] +
    "</span></div>" +
    '<div class="option" onclick="selectedOption(this)"><span>' +
    quetions[quetion_count].options[3] +
    "</span></div>";

  quetionTxt.innerHTML = que;
  quetionNum.innerHTML = queNum;
  options.innerHTML = optionsAdd;
  quetionNumber.innerHTML = quetions[quetion_count].no;
  totalQuetion.innerHTML = quetions.length;
  totlQuetions.innerHTML = quetions.length;


  let queLen = quetions.length;
  if(queLen == queNum){
    // console.log("LAst");
    nextBtn.classList.add("hideBtn");
    submitBtn.classList.add("showBtn");
  }
};

let corr;
const selectedOption = (ans) => {
  let option_list = document.querySelectorAll(".option");
  let userAns = ans.textContent;
  // console.log(userAns);
  let correctAns = quetions[quetion_count].ans;

  const checker = () => {
    if (userAns == correctAns) {
      // console.log("hello");
      correctQue = correctQue + 1;
       corr = corrAns.textContent;
      clearInterval(timerstart);
      userScore = userScore + 10;
      ans.classList.add("correct");
      for (let i = 0; i < option_list.length; i++) {
        option_list[i].classList.add("pointer");
      }
      // console.log(correctQue);
    } else {
      // console.log("helloWorld");
      wrongQue = wrongQue + 1;
      clearInterval(timerstart);
      ans.classList.add("wrong");
      for (let i = 0; i < option_list.length; i++) {
        option_list[i].classList.add("pointer");
        if (option_list[i].textContent == correctAns) {
          option_list[i].classList.add("correct");
        }
      }
      // console.log(wrongQue);
    }
  };

  checker();
};

let corrAns = document.querySelector(".corr_ans");
let wrongAns = document.querySelector(".wrong_ans");

const showResult = () => {
  // console.log("Ok")
  resultBox.classList.add("activeRes");
  quetionBox.classList.remove("activeQuetion");

  scoreNum.innerHTML = userScore;
  corrAns.innerHTML = correctQue;
  wrongAns.innerHTML = wrongQue;
};

let timeText = document.querySelector(".time");

replayBtn.onclick = () => {
  window.location.reload();
};

const start_time = (time) => {
  const timer = () => {
    time--;
    timeText.innerHTML = time;
    if (time == 0) {
      timeText.innerHTML = 0;
      clearInterval(timerstart);
    //   checker();
    next_que();
    start_time(15);
    }
  };
  timerstart = setInterval(timer, 1000);
};

submitBtn.onclick = () => {
  showResult();
}