
// ブラウザで好きなサイトを開いてコンソールタブで下記のコードを実行してみよう
document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(199,129,35)"


// ブラウザで好きなサイトを開いてコンソールタブで下記のコードを実行してみよう
document.getElementsByTagName("body")[0].style.backgroundColor = "#2fdd3c"

// A-Zのアルファベットが出力される
// 65 には アルファベットの「A」が割り当てられている
for (let i=0; i<26; i++){
    console.log(String.fromCodePoint(65+i));
}

// あ〜ゖの平仮名が出力される
// 12354 には 平仮名の「あ」が割り当てられている
for (let i=0; i<85; i++){
    console.log(String.fromCodePoint(12354+i));
}