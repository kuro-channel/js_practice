// JavaScript道場：四日目 / オブジェクトについて

// オブジェクトの宣言方法
{}
typeof {} // "object"

// オブジェクトは変数に格納できる
var obj = {}
var person = {}

// オブジェクト：名前と値をもつプロパティを格納する入れ物にすぎない
// 「プロパティ」とはオブジェクトが持つデータのこと。
var obj1 = {};
var obj2 = {};

if(obj1 === obj2){
    console.log("同じ?")
}else {
    console.log("同じではない")
}

// プロパティのセット方法1
var obj = {name: "Takumi Kuroiwa ", age: 29}
obj // {name: "Takumi Kuroiwa ", age: 29}

// プロパティのセット方法2
var obj = {}
obj.name = "Takumi Kuroiwa"
obj.age = 29
obj // {name: "Takumi Kuroiwa ", age: 29}

// プロパティのセット方法3
var name = "Takumi Kuroiwa"
var age = 29
var obj = {name, age}
obj // {name: "Takumi Kuroiwa ", age: 29}

// obj が持つ name という プロパティ
// を取り出す(アクセスする、参照する)
obj.name

var obj = {name: "黒岩卓誠"}
console.log(name) // undefined
console.log(obj.name) // 黒岩卓誠

var obj1 = {name: "黒岩卓誠"}
var obj2 = {name: "武田信玄"}
console.log(obj1.name) // 黒岩卓誠
console.log(obj2.name) // 武田信玄

// オブジェクトのプロパティには関数もセットできる
var obj = {
    sayHello: function () {
        console.log("こんにちは")
    }
}
// 関数を参照する
obj.sayHello()

// プロパティ内の関数から同じオブジェクトのプロパティにアクセスするにはthisを使う
var obj = {
    name: "黒岩卓誠",
    sayHello: function () {
        console.log("こんにちは," + this.name + "と申します")
    }
}
obj.sayHello() // こんにちは,黒岩卓誠と申します