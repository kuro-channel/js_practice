/* 関数について
 https://paper.dropbox.com/doc/JavaScript-1-WIwvmEU1MU1UzjCWnmhCy
 MSN: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions
 MSN: https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Functions
*/

// 関数は、処理(コンピュータへの命令)を記述したメモです。
// このメモの通りに動作してね！というコンピュータへの依頼は、
// メモとは別に行います。これが、関数の「定義」と「実行」の違いです。
//
// 関数は一度`定義`すれば何度でも繰り返し使える
hoge() // hoge という名前の関数を呼び出す(実行する)
hoge() // hoge という名前の関数を呼び出す(実行する)
hoge() // hoge という名前の関数を呼び出す(実行する)

// 関数の宣言
// プリミティブなパラメータ（数値など）は値渡しで関数に渡される。
//　値は関数に渡されるが、関数がパラメータの値を変更しても、関数の呼び出し元の値には影響しない
var num = 4;
function square(number) {
    return number * number;
}
console.log(square(num)) // 16

// 参照渡し
// オブジェクトをパラメータとして渡すと、関数がオブジェクトのプロパティを変更した場合、
// その変更が関数外でも有効になる
function myFunc(theObject) {
    theObject.make = "Toyota";
}

var mycar = {make: "Honda", model: "Accord", year: 1998};
var x,y;
x = mycar.make; // Xは"Honda"という値になる

myFunc(mycar);
y = mycar.make // プロパティが関数で変更されている

// 関数式
// 無名関数：関数に名前をつける必要がない
var square = function (number) { return number * number;}
var x = square(4); // 16
console.log(x); // 16

// 引数には関数を渡せる！
function  map(f, a) {
    let result = []; // 新しい配列を作成する
    let i; // 変数の宣言
    for(i = 0; i != a.length; i++){
        result[i] = f(a[i]);
    }
    return result;
}
var f = function (x) {
    return x * x * x;
}
var numbers = [0,1,2,5,10];
var cube = map(f,numbers);
console.log(cube); // [0,1,8,125,1000]

// 関数の宣言は呼び出しより後に置くことができる
console.log(square(5));
function square(n) { return n*n};
// 以下のコードは動作しない
/*  console.log(square); // square は初期値 undefined で巻き上げられる。
    console.log(square(5)); // TypeError: square is not a function
    var square = function(n) {
    return n * n;
}*/

// 関数のスコープ
// グローバルスコープって何だっけ？
// 関数は、小さな別のプログラム

