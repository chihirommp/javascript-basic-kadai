// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {

  // id=textの文章を「ボタンをクリックしました」に書き換える
  text.textContent = 'ボタンをクリックしました';

});
