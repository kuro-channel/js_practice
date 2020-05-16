// 真偽値以外のもの(数値や文字)が if で使われた場合の挙動
// JavaScriptの場合、数値が0以外は全て true 0のみ false です
var a = 100;
if(a){
    console.log("aはtrue?"); // 〇
}else {
    console.log("aはfalse?");
}

var _a = 0;
if(_a){
    console.log("aはtrue?");
}else {
    console.log("aはfalse?"); // 〇 0はfalse
}

var b = "hello";
if(b){
    console.log("bはtrue?");　// 〇
}else {
    console.log("bはfalse?");
}

var c = "";
if(c){
    console.log("cはtrue?");
}else {
    console.log("cはfalse?"); // 〇
}

// false（偽）になるものは下記のみ。
// false
// undefined
// null
// +0,-0,NaN
// "" （空文字）