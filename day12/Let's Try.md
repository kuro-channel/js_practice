### 調べてみよう
- toString(16) とは？
  - MDN: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
  - toString() メソッドは、指定された Number オブジェクトを表す文字列を返します。
  - 引数：数値を表すために使われる基数を指定する、2 から 36 までの整数
  - 指定された Number オブジェクトを表す文字列
  - 数値から「16進数文字列へ変換する」: 引数には16を指定する
```javascript
var i = 15;
i.toString(16); // "f"
14.toString(16); // "e"
Number(13).toString(16); // "d"
```
  
- Math.floor とは？
  - MDN: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
  - Math.floor() メソッドは、引数として与えた数以下の最大の整数を返します。
  - 小数点以下を切り捨てる
```javascript
var i = 3.14;
console.log(Math.floor(i)); // 3
```
- Math.random とは？
  - MDN: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  - Math.random()関数は、0–1（0以上、1未満）の範囲で浮動小数点の擬似乱数を返す
  - 浮動小数点とは、**小数点の位置を固定せずに表現された数**
  - https://qiita.com/angel_p_57/items/24078ba4aa5881805ab2#%E5%9B%BA%E5%AE%9A%E5%B0%8F%E6%95%B0%E7%82%B9%E3%81%A8%E6%B5%AE%E5%8B%95%E5%B0%8F%E6%95%B0%E7%82%B9
```javascript
Math.floor(Math.random () * 10) + 1; // 1から10までの整数の乱数を取得する
```

### コードを書いてみよう
1. forを使ってたくさん四角形を書いてみよう

2. 四角形を沢山生成する処理を関数として定義しよう

3. setIntervalを使って一定間隔で四角形を沢山書く関数を実行しよう