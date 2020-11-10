const question = '次のうち、青森県で有名な果物はなに？';
const answers = ['梨', '葡萄', '林檎', '桃'];
const correct = '林檎';

// document.getElementsByTagName('button')[0].textContent = answers[0]; 省略前
const $button = document.getElementsByTagName('button') // 暗黙の了解で、定数にhtmlを代入するときは、$をつける
//while文で使う
const buttonLength = $button.length //bottonの個数を数えて代入
//問題文＋選択肢を定義
const setUpQuiz = () => { 
  // textContentで、getElementByIdで指定したjs-questionの中身を取り出し、questionを代入している
  document.getElementById('js-question').textContent = question;
  let buttonIndex = 0; //初期値
    while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++; //繰り返すたびに１増える
  };
};

setUpQuiz();

const clickHandler = (e) => {
  if(correct === e.target.textContent){
    alert('正解');
  }else {
    alert('不正解');
  }
};

let buttonHandler = 0; //初期値
while(buttonHandler < buttonIndex) {
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


