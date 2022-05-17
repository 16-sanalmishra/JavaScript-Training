// var arr1 = [1,2,3];



// function mapForEach(arr,fn){
//     var newarr = [];
//     for(var i=0; i<arr.length;i++){
//         newarr.push(fn(arr[i]));
//     }
//     console.log(newarr);
// }
// console.log(mapForEach(arr1 , function (item){
//     return item % 2 === 0;
// }))
var arr1 = [1, 2, 3, 4, 5, 6, 67, 34];
console.log(arr1);

// var arr2 = [];
// for (var i = 0; i < arr1.length; i++) {
//   arr2.push(arr1[i] * 2);
// }
// console.log(arr2);

function mapForEach(arr, fn) {
  var newarr = [];
  for (var i = 0; i < arr.length; i++) {
    newarr.push(fn(arr[i]));
  }
  return newarr;
}

console.log(
  mapForEach(arr1, function (item) {
    return item + 2;
  })
);

console.log(
  mapForEach(arr1, function (item) {
    return item > 5;
  })
);

console.log(
  mapForEach(arr1, function (item) {
    return item % 2 === 0;
  })
);