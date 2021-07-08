// 0から9までの数字をすべて足す
// 問題の論理そのものをコードに単純に書き写すことを徹底的にやっていく！

// 関数式：aとbを足す
const plus = (a, b) => {
  return a + b;
};

const s = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reduce(plus);
console.log(s);