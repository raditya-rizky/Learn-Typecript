function add(n1: number, n2: number): string {
  return `the result is ${n1 + n2}`;
}

const plus = add(13, 89);
console.log(plus);

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(32, 22, (res) => {
  console.log(res);
});
