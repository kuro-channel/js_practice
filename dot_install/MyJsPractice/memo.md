### Javascript: イベントとイベントハンドラ－
```text
イベントは、マウスボタンをクリックした、ページが読み込まれたなどの動作が起こった時に発生します。 
イベントハンドラは、このイベントを検出し、イベントに処理を与えるのに使用します。 
イベントハンドラによって、発生したイベントごとに処理を実行することができます。
```

### addEventListener 
- https://developer.mozilla.org/ja/docs/Web/API/EventTarget/addEventListener
  - EventTarget の addEventListener() メソッドは、特定のイベントが対象に配信されるたびに呼び出される関数を設定します。
  - EventListener というのは、何かが起きたら何らかの処理をするという仕組みで、今回だと click したらこちらの処理をしてね、という意味になります。

### classList
- https://developer.mozilla.org/ja/docs/Web/API/Element/classList
  - 特定の要素のクラス名を追加したり、削除したり、参照したりすることが出来る便利なプロパティ
  - https://qiita.com/tomokichi_ruby/items/2460c5902d19b81cace5

|メソッド名|機能|
|----|----|
|add|クラスを追加する|
|remove|クラスを削除する|
|contains|クラスが含まれているか確認する|
|toggle|クラスが含まれていれば削除、含まれていなければ追加する|

### CSSにおける円の描き方
```css
.box {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
```

### appendChild
- https://developer.mozilla.org/ja/docs/Web/API/Node/appendChild
  - Node.appendChild() メソッドは、特定の親ノードの子ノードリストの末尾にノードを追加します
```javascript
// 新しい段落要素を作成し、ドキュメントの body の最後に追加します。
var p = document.createElement("p");
document.body.appendChild(p);
```

### line-height: css
- https://developer.mozilla.org/ja/docs/Web/CSS/line-height

```text
行の高さとフォントサイズの関係ですが、 例えばline-heightが20pxでfont-sizeが14pxの場合、 
20px（行の高さ）から14px（フォントサイズ）を引いた残りの6pxが、行間として上下均等に3pxずつ
割り振られます。
```

###  Math.floor(Math.random() * num); // 0-4
- Math.random(): https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  - 0–1（0以上、1未満）の範囲で浮動小数点の擬似乱数を返す
```javascript
console.log(Math.random()); // 0.3225551764688954. 0.16222167509917207, 0.29766175241840265
// 0以上5未満の値がほしい
var num = Math.random() * 5; // 0以上、1未満(=未満: 1は返らない）
// 5を含んだ数値の中から値を得たい場合は、6をかける必要がある。
```

- Math.floor(): https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
  - 引数として与えた数以下の最大の整数を返す
```javascript
console.log(Math.floor(5.95));
// expected output: 5

console.log(Math.floor(5.05));
// expected output: 5

console.log(Math.floor(5));
// expected output: 5

console.log(Math.floor(-5.05));
// expected output: -6
```
#### 応用！
```javascript
Math.floor(Math.random() * 5); // 0-4のいずれかの整数が取得できる
```