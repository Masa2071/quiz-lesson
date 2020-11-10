const quiz = [
  { //問題1が格納されている
    question: '次のうち、青森県で有名な果物はなに？',
    answers: ['梨', '葡萄', '林檎', '桃'],
    correct: '林檎'
  },{//問題2
    question: '漫画one pieceの主人公は次のうち誰？',
    answers: ['エース','ルフィー','ナミ','ゾロ'],
    correct: 'ルフィー'
  },{//問題3
    question: '安室奈美恵さんの誕生日は次のうちどれ？',
    answers: ['9月16日', '9月17日', '9月18日', '9月20日'],
    correct: '9月20日'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0; //最後に何問正解したかを出力する

// document.getElementsByTagName('button')[0].textContent = answers[0]; 省略前
const $button = document.getElementsByTagName('button') // 暗黙の了解で、定数にhtmlを代入するときは、$をつける
//while文で使う
const buttonLength = $button.length //bottonの個数を数えて代入
//問題文＋選択肢を定義
const setUpQuiz = () => {
  // textContentで、getElementByIdで指定したjs-questionの中身を取り出し、questionを代入している
  document.getElementById('js-question').textContent = quiz[quizIndex].question; //quiz[quizIndex]を指定することでquizの中の何問目のquestionか判断する
  let buttonIndex = 0; //初期値
    while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++; //繰り返すたびに１増える
  };
};

setUpQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    alert('正解');
    score++; //正解ならscoreに+1
  }else {
    alert('不正解');
  }
  quizIndex++;
  if(quizIndex < quizLength){ //今何問目と合計で何問あるかを比較する
    //問題数がまだある処理
    setUpQuiz();
  }else {
    //問題数がもうない処理
    alert('終了!あなたの正解数は' + score + '/' + quizLength + 'です。')
  }

};

let buttonHandler = 0; //初期値
while(buttonHandler < buttonLength) {
  $button[buttonHandler].addEventListener('click', (e) => {
    clickHandler(e);
  });
  buttonHandler++;
};

// ボタンがクリックされた時correctと答えが合っているか判定
// $button[0].addEventListener('click', (e) => {
//   if(correct === e.target.textContent){
//     alert('正解');
//   }else {
//     alert('不正解');
//   }
// });

// // 上も下も同じ意味

// $button[1].addEventListener('click', () => {
//   if(correct === $button[1].textContent){
//     alert('正解');
//   }else {
//     alert('不正解');
//   }
// });


