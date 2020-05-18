### CANVASとは？
- Javascriptでアニメーションを書くための仕様

### 長方形の描画
- ctx.fillRect(x,y,w,h): 塗りつぶし
- ctx.strokeRect(x,y,w,h): 塗りつぶしなし
1. x: 描画する長方形の左上端の水平座標
2. y: 描画する長方形の左上端の垂直座標
3. w: 描画する長方形の幅
4. h: 描画する長方形の高さ

```javascript
ctx.fillRect(0,0,50,50); // 矩形（すべての角が直角の、四辺形。長方形。）で塗り潰すエリアを指定する
ctx.strokeRect(50,0,50,50); // x,y,w,h : x/y > 座標
```    

### 多角形の描画
- lineToメソッド()を繰り返し呼び出すことで、直線を組み合わせて多角形パスを定義する。

```javascript
/** 三角形を書いてみる */
ctx.beginPath();
ctx.moveTo(100,100); // 始点
ctx.lineTo(100,175); // 指定した終点への直線パス
ctx.lineTo(200,175); // 指定した終点への直線パス
ctx.closePath();
ctx.fillStyle = "blue";
ctx.fill();
```

### 円形の描画
```text
context.arc( x , y , 半径 , 開始角度 , 終了角度 , 回り方 )
x…円の中心のx座標
y…円の中心のy座標
三つ目の引数は半径を指定（円の半径）
開始角度をラジアンで指定。0の時は右（時計の3時の位置）
終了角度をラジアンで指定。
回り方はtrueで反時計回り、falseで時計回り。
```
- 円形の場合、arc()メソッドを呼び出す際、開始角に0[rad]し、終了角にMath.PI*2[rad]を指定する。
　　- ラジアンで表すと180°はπ（パイ）、360°は2π（2パイ）となります。

###  setInterval
- MDN: https://developer.mozilla.org/ja/docs/Web/API/Window/setInterval
  - setInterval() メソッドは、一定の遅延間隔を置いて関数やコードスニペットを繰り返し呼び出します。
  - ブラウザを閉じるまでsetIntervalの処理は続く。

```javascript
var count = 0;
var countup = function(){
    console.log(count++);
}
var id = setInterval(function(){
    countup();
    if(count > 5){
        clearInterval(id);
}}, 1000);

var log = function(){
  console.log("test");
};

setInterval(log, 3000);
// 3秒ごとに"test"と表示されます
```