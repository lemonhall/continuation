var list, i;
function delay(num, callback) {
  setTimeout(function () {
    callback(num);
  }, 10);
}
list = [];
i = 0;
while (i < 5) {
  list.push(i);
  i++;
}
console.log(list);
i = 0;
function loop_0(loop_0_cont) {
  if (i < 5) {
    delay(i * i, function () {
      list[i] = arguments[0];
      i++;
      loop_0(loop_0_cont);
    });
  } else {
    loop_0_cont();
  }
}
loop_0(function () {
  console.log(list);
});