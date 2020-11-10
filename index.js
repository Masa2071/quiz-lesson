const question = '次のうち、青森県で有名な果物はなに？';
const answers = ['梨', '葡萄', '林檎', '桃'];
const correct = '林檎';

// console.log()

// textContentで、getElementByIdで指定したjs-questionの中身を取り出し、questionを代入している
document.getElementById('js-question').textContent = question;

// ボタンにanswersを埋めて行く
// 暗黙の了解で、定数にhtmlを代入するときは、$をつける
const $button = document.getElementsByTagName('button')
// document.getElementsByTagName('button')[0].textContent = answers[0]; 省略前

$button[0].textContent = answers[0];  //省略形
$button[1].textContent = answers[1];
$button[2].textContent = answers[2];
$button[3].textContent = answers[3]; 

// ボタンがクリックされた時correctと答えが合っているか判定
$button[0].addEventListener('click', function(){
  if(correct === $button[0].textContent){
    alert('正解');
  }else {
    alert('不正解');
  }
});
$button[1].addEventListener('click', function(){
  if(correct === $button[1].textContent){
    alert('正解');
  }else {
    alert('不正解');
  }
});
$button[2].addEventListener('click', function(){
  if(correct ===　$button[2].textContent){
    alert('正解');
  }else {
    alert('不正解');
  }
});
$button[3].addEventListener('click', function(){
  if(correct === $button[3].textContent){
    alert('正解');
  }else {
    alert('不正解');
  }
});



