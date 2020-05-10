// 関数も「普通のオブジェクトと同じ」
var fuga = function(){
    return 1+1;
}
var a = fuga(); // 実行
console.log(a);

// 関数オブジェクトはほかの関数の引数として渡せる
console.log(fuga());

// setIntervalを使ってみる
// setInterval(): 一定の遅延間隔を置いて関数を繰り返し実行する関数
// 第一引数：関数オブジェクトを指定 / 第二引数：間隔をms単位で指定（1秒=1000ミリ秒）
var n = 0;

function func(){
    n += 1; // この関数が呼び出される度に、変数:nが1ずつ増えていく
    console.log("hello:" + n);
}
var intervalID = setInterval(func, 200); // 200ms毎に'helloと出力される'
clearInterval(intervalID) // intervalIdを指定して繰り返しを止める

// callback/callback関数
// ある関数の中で実行したい関数（=callback関数）を定義することができる
// 関数の実行を遅延させたい場合等に便利

// 練習：関数を指定した回数だけ実行できる関数を定義する
// 引数で指定した関数を指定回数だけ実行する
function loopFunction(func, count) {
    for(let i = 0; i < count; i++){
        func(); // funcは関数オブジェクト()をつけて関数を実行する
    }
}

// 書き方1: アロー関数を引数に指定
loopFunction(() => {
    console.log("hello");
}, 3);

// 書き方2: 関数式を引数に指定
loopFunction(function () {
    console.log("Good mooning");
} , 3);

// 書き方3: 関数オブジェクトを引数に指定
function goodbye(){
    console.log("goodbye!!");
}
loopFunction(goodbye, 7); // goodbye()としないこと