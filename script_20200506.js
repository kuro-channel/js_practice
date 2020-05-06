// https://paper.dropbox.com/doc/JavaScript--AzY~3pL8wkUBrzCcDRlHfY8iAg-Yi1Ea2sOSumM5jxUZ2YrN

// オブジェクト：名前と値をもつプロパティを格納する入れ物にすぎない
// 「プロパティ」とはオブジェクトが持つデータのこと。
var obj = {name : "黒岩 卓誠"}
obj.name // objオブジェクトのプロパティ

// consoleってなんだろう？
// consoleはオブジェクトが格納された変数
// https://developer.mozilla.org/ja/docs/Web/API/console
typeof console // "object"
typeof console.log // "function"

// グローバルオブジェクト
var a = 100
console.log(a) // 100
console.log(this.a) // 100

this.a = 200
console.log(a) // 200
console.log(this.a) // 200

typeof this // "object"

// thisはオブジェクトでした！
// そして、これがグローバルオブジェクトです。

// ポイント：変数をvarで宣言した時、
// グローバルオブジェクトに登録される
// (グローバフオブジェクトのプロパティになる)

// console:グローバルオブジェクトのプロパティ
this.window.console.log("hello")
console.log("hello")
this.console.log("hello")
window.console.log("hello")
this.window.console.log("hello")

// オブジェクトの中に二つ関数があり、関数内でthisを使う
var obj = {
    test_a: function() {
        // thisなし
        console.log("hello")
    },
    test_b: function () {
        // thisあり
        // thisではなく window　をつかうといける
        // this.console.log("hello")
        window.console.log("hello")
    }
}
obj.test_a()
obj.test_b() // Uncaught TypeError: Cannot read property 'log' of undefined
