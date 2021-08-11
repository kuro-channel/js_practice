# arguments
- 開眼!Javascript p.63
- 関数に渡された引数を格納する配列のようなオブジェクト
  - オブジェクトのままだと使いずらいので、配列にする
```javascript
{
    "0": 1,
    "1": 2,
    "2": 3
}
let slicedArray = [].slice.call(arguments);
```

# apply, call, bind
- jsprimer: https://jsprimer.net/basic/function-this/#call-apply-bind
```
Function（関数オブジェクト）にはcall、apply、bindといった明示的にthisを指定して関数を実行するメソッドが用意されています。
```
- call、apply、bindメソッドを使うことでthisを明示的に指定した状態で関数を呼び出せる


# call
- 開眼!Javascript p.63
- call(thisArg, [, arg1 [, arg2][, ...]])
  - thisArgにthisの値を渡し、関数を実行する
  - 第2引数以降の引数が実行関数の第1引数～となる
  - applyと基本的には使い方一緒

# apply
- 開眼!Javascript p.63
- apply(thisArg, argArray)
  - thisArgにthisの値を渡し、関数を実行する
  - 第2引数以降の引数は「配列」

# bind
- jsprimer: https://jsprimer.net/basic/function-this/#call-apply-bind
- 関数.bind(thisの値, ...関数の引数); // => thisや引数がbindされた関数